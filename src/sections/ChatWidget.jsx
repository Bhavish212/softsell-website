import React, { useState } from 'react';
import axios from 'axios';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! Ask me anything about selling software licenses.' }
  ]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant for a software license resale site.' },
          { role: 'user', content: input }
        ]
      }, {
        headers: {
          'Authorization': `Bearer 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`,
          'Content-Type': 'application/json'
        }
      });

      const botMessage = response.data.choices[0].message.content;
      setMessages(prev => [...prev, { from: 'bot', text: botMessage }]);

    } catch (err) {
      setMessages(prev => [...prev, { from: 'bot', text: 'Oops! Something went wrong.' }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded-full shadow hover:bg-indigo-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Chat' : 'Chat'}
      </button>

      {isOpen && (
        <div className="w-80 h-96 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm my-1 ${
                  msg.from === 'bot'
                    ? 'text-left text-indigo-600 dark:text-indigo-400'
                    : 'text-right text-gray-800 dark:text-gray-200'
                }`}
              >
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ask a question..."
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 border p-2 text-sm rounded bg-white text-black dark:bg-gray-800 dark:text-white dark:border-gray-600"
            />
            <button
              onClick={sendMessage}
              className="bg-indigo-600 text-white px-3 rounded hover:bg-indigo-700"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
