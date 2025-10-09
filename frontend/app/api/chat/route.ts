import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}))
  const messages = (body?.messages as Array<{ role: string; content: string }>) ?? []

  const openrouterKey = process.env.OPENROUTER_API_KEY
  const openaiKey = process.env.OPENAI_API_KEY
  if (!openrouterKey && !openaiKey) {
    const last = messages[messages.length - 1]?.content ?? ""
    return NextResponse.json({ message: `You said: ${last}. I can help with AI, web, and mobile development.` })
  }

  try {
    async function fetchWithRetries(doFetch: () => Promise<Response>, attempts = 3) {
      let last: Response | null = null
      for (let i = 0; i < attempts; i++) {
        last = await doFetch()
        if (last.status !== 429) return last
        const delayMs = 500 * Math.pow(2, i)
        await new Promise((r) => setTimeout(r, delayMs))
      }
      return last as Response
    }

    let res: Response | null = null

    const systemPrompt =
      "You are Astronyvia's on-site assistant. ONLY answer using the site context below. If the user asks about anything not present in the context, reply: 'I can help with Astronyvia information only. Please ask about our services, projects, pricing, or contact.' Keep answers under 120 words. Greet politely and stay concise."
    const siteContext = {
      site: {
        name: "Astronyvia",
        url: "https://astronyvia.com/",
      },
      contact: {
        address: "ECB Chattar, Dhaka, Bangladesh",
        emails: ["contactus@astronyvia.com", "info@astronyvia.com"],
        phone: "+880 1521104415",
        quick: {
          whatsapp: "https://wa.me/8801521104415",
          email: "hello@astronyvia.com",
          telegram: "https://t.me/astronyvia",
        },
        hours: [
          { days: "Monday – Friday", hours: "9:00 AM – 6:00 PM" },
          { days: "Saturday", hours: "10:00 AM – 4:00 PM" },
          { days: "Sunday", hours: "Closed" },
        ],
      },
      services: [
        "Website, Web Application & E-Commerce Development",
        "Android Application Development",
        "Software Development",
        "Office Setup (Hardware Purchase & Installation)",
        "3D Modeling & Game Asset Design",
        "Search Engine Optimization (SEO)",
      ],
      pages: ["/about", "/services", "/projects", "/blog", "/contact"],
    }
    if (openrouterKey) {
      const referer = process.env.SITE_URL || "https://astronyvia.com"
      const title = process.env.SITE_NAME || "Astronyvia"
      const modelsEnv = process.env.OPENROUTER_MODELS || process.env.OPENROUTER_MODEL || "openai/gpt-4.1-mini"
      const models = modelsEnv.split(",").map((m) => m.trim()).filter(Boolean)

      // Try each model in order with retries; stop on first success or non-429 error
      let lastResponse: Response | null = null
      for (const model of models) {
        lastResponse = await fetchWithRetries(
          () =>
            fetch("https://openrouter.ai/api/v1/chat/completions", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${openrouterKey}`,
                "HTTP-Referer": referer,
                "X-Title": title,
              },
              body: JSON.stringify({
                model,
                messages: [
                  { role: "system", content: systemPrompt },
                  { role: "system", content: `SITE_CONTEXT:\n${JSON.stringify(siteContext)}` },
                  ...messages,
                ],
                temperature: 0.5,
                max_tokens: 300,
              }),
            }),
          3
        )
        if (lastResponse.status !== 429) {
          res = lastResponse
          break
        }
      }
      const finalRes = res ?? lastResponse
      if (!finalRes) {
        throw new Error("No response from OpenRouter")
      }
      res = finalRes
      // If still rate-limited and OpenAI key exists, fallback
      if (res.status === 429 && openaiKey) {
        res = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openaiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
              { role: "system", content: systemPrompt },
              { role: "system", content: `SITE_CONTEXT:\n${JSON.stringify(siteContext)}` },
              ...messages,
            ],
            temperature: 0.5,
            max_tokens: 300,
          }),
        })
      }
    } else {
      res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "system", content: `SITE_CONTEXT:\n${JSON.stringify(siteContext)}` },
            ...messages,
          ],
          temperature: 0.5,
          max_tokens: 300,
        }),
      })
    }
    if (!res.ok) {
      const errBody = await res.text().catch(() => "")
      return NextResponse.json(
        { message: `Upstream error (${res.status}): ${errBody || res.statusText}` },
        { status: 200 }
      )
    }
    const data = await res.json()
    const message = data.choices?.[0]?.message?.content ?? data.message ?? "How can I help you today?"
    return NextResponse.json({ message })
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unknown error"
    return NextResponse.json({ message: `Service error: ${msg}` }, { status: 200 })
  }
}


