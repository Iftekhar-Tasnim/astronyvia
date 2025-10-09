"use client"

import { useEffect, useRef, useState } from "react"
import { Send, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

type ChatMessage = {
  id: string
  role: "user" | "assistant"
  content: string
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I’m Astronyvia Assist. Ask me anything about our services, AI, web, or mobile apps.",
    },
  ])

  const listRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isOpen])

  async function sendMessage() {
    const trimmed = input.trim()
    if (!trimmed || isSending) return
    const userMsg: ChatMessage = { id: crypto.randomUUID(), role: "user", content: trimmed }
    setMessages((m) => [...m, userMsg])
    setInput("")
    setIsSending(true)
    setIsTyping(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg].map(({ role, content }) => ({ role, content })) }),
      })
      if (!res.ok) throw new Error("Failed to fetch reply")
      const data = await res.json()
      const fullText: string =
        data.message ?? "I’m here to help with AI, web development, cloud, and mobile questions."

      // Typing effect
      const id = crypto.randomUUID()
      setMessages((m) => [...m, { id, role: "assistant", content: "" }])
      let shown = ""
      for (const ch of fullText) {
        shown += ch
        setMessages((m) => m.map((msg) => (msg.id === id ? { ...msg, content: shown } : msg)))
        await new Promise((r) => setTimeout(r, 12))
      }
    } catch (err) {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "Sorry—I couldn’t reach the server. Please try again, or contact us via the form on the Contact page.",
        },
      ])
    } finally {
      setIsSending(false)
      setIsTyping(false)
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen ? (
        <Button aria-label="Open chat" className="glow-cyan rounded-full p-0 h-12 w-12" onClick={() => setIsOpen(true)}>
          <MessageCircle className="h-5 w-5" />
        </Button>
      ) : (
        <div className="glass neon-border-cyan relative flex h-[420px] w-[340px] flex-col overflow-hidden rounded-2xl">
          <div className="flex items-center justify-between border-b px-4 py-2">
            <div className="text-sm font-semibold">Astronyvia Assist</div>
            <button aria-label="Close chat" onClick={() => setIsOpen(false)} className="opacity-70 hover:opacity-100">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m) => (
              <div key={m.id} className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${m.role === "user" ? "ml-auto bg-primary/20" : "bg-background/50"}`}>
                {m.content}
              </div>
            ))}
            {isTyping && (
              <div className="max-w-[85%] rounded-xl px-3 py-2 text-sm bg-background/50 text-muted-foreground">
                <span className="typing-dots"><span className="dot" /><span className="dot" /><span className="dot" /></span>
              </div>
            )}
          </div>
          <div className="border-t p-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask about AI, web, mobile…"
                className="glass flex-1 rounded-lg border border-border/50 bg-background/50 px-3 py-2 text-sm outline-none"
              />
              <Button size="icon" aria-label="Send" disabled={isSending} onClick={sendMessage} className="glow-cyan h-9 w-9">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


