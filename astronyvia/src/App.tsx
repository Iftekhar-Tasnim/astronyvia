import { useState } from 'react';
import { Button, Card, Input } from './Components';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 text-center">
            🎨 Component Showcase
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Button Showcase */}
          <Card title="Button Components" subtitle="Different variants and sizes">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" size="sm">Small Primary</Button>
                <Button variant="primary" size="md">Medium Primary</Button>
                <Button variant="primary" size="lg">Large Primary</Button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button disabled>Disabled</Button>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  variant="primary" 
                  onClick={() => setCount(count + 1)}
                  className="w-full"
                >
                  Clicked {count} times
                </Button>
              </div>
            </div>
          </Card>

          {/* Input Showcase */}
          <Card title="Input Components" subtitle="Form inputs with validation">
            <div className="space-y-4">
              <Input
                label="Text Input"
                placeholder="Enter some text..."
                value={inputValue}
                onChange={setInputValue}
              />
              
              <Input
                type="email"
                label="Email Input"
                placeholder="your@email.com"
                value={emailValue}
                onChange={setEmailValue}
                error={emailValue && !emailValue.includes('@') ? 'Please enter a valid email' : ''}
              />
              
              <Input
                type="password"
                label="Password"
                placeholder="Enter password"
                value=""
                onChange={() => {}}
              />
              
              <Input
                label="Disabled Input"
                value="This is disabled"
                onChange={() => {}}
                disabled
              />
            </div>
          </Card>

          {/* Card Showcase */}
          <Card title="Card Components" subtitle="Clickable and static cards">
            <div className="space-y-4">
              <Card 
                title="Clickable Card" 
                subtitle="This card is clickable"
                onClick={() => alert('Card clicked!')}
                className="cursor-pointer"
              >
                <p>Click me to see an alert!</p>
              </Card>
              
              <Card title="Static Card">
                <p>This is a static card with just content.</p>
                <div className="mt-3 flex gap-2">
                  <Button variant="outline" size="sm">Action 1</Button>
                  <Button variant="secondary" size="sm">Action 2</Button>
                </div>
              </Card>
            </div>
          </Card>

          {/* Interactive Demo */}
          <Card title="Interactive Demo" subtitle="Try the components">
            <div className="space-y-4">
              <p className="text-gray-600">
                This demonstrates how all components work together with Tailwind CSS styling.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Current Values:</h4>
                <p className="text-sm text-gray-600">
                  <strong>Text:</strong> {inputValue || 'None'}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Email:</strong> {emailValue || 'None'}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Clicks:</strong> {count}
                </p>
              </div>
              
              <Button 
                variant="primary" 
                onClick={() => {
                  setInputValue('');
                  setEmailValue('');
                  setCount(0);
                }}
                className="w-full"
              >
                Reset All
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
