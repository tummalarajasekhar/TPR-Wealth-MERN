import React, { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm your investment assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const defaultQuestions = [
    { question: "What is mutual fund investment?", answer: "A mutual fund is a pool of money collected from investors to invest in securities like stocks, bonds, and other assets." },
    { question: "How to track my investment?", answer: "You can track your investment using our 'Track Investments' page, available in the navigation menu." },
    { question: "What are the benefits of SIP?", answer: "Systematic Investment Plans (SIPs) help in disciplined investment, rupee cost averaging, and compounding over time." },
    { question: "How can I contact support?", answer: "You can contact us via email at support@tprwealth.com or call us at +91-123-456-7890. Alternatively, visit the Contact Us page." },
    { question: "how can I start", answer: "Go to Contact Us page a Mentor will Guide you" },
  ];

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { text: input, sender: "user" }]);

      // Simulate bot response (placeholder logic)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Thank you for your question! Go to Contact Us page a Mentor will Guide you", sender: "bot" },
        ]);
      }, 1000);

      setInput(""); // Clear input field
    }
  };

  const handleDefaultQuestion = (answer) => {
    // Add question and answer to chat history
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: answer, sender: "bot" },
    ]);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-gray-600 to-gray-800 text-white px-4 py-2 rounded-lg shadow-lg hover:from-gray-700 hover:to-gray-900 focus:outline-none"
      >
        {isOpen ? "Close Chat" : "Chat with Bot"}
      </button>

      {/* Chatbot Container */}
      {isOpen && (
        <div className="mt-2 w-80 bg-gray-800 text-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="bg-gradient-to-r from-gray-500 to-gray-700 px-4 py-2 text-center font-bold">
            Investment Assistant
          </div>
          <div className="p-4 h-60 overflow-y-auto space-y-3 flex-grow">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg max-w-[75%] ${
                    message.sender === "bot"
                      ? "bg-gray-600 text-white"
                      : "bg-blue-500 text-black"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Default Questions */}
          <div className="p-2 bg-gray-700 border-t border-gray-600 space-y-2">
            <p className="text-gray-300 text-sm mb-2">Quick Questions:</p>
            {defaultQuestions.map((item, index) => (
              <button
                key={index}
                onClick={() => handleDefaultQuestion(item.answer)}
                className="w-full text-left bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-500 focus:outline-none"
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center p-2 bg-gray-700">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-2 text-black rounded-l-lg focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 px-4 py-2 rounded-r-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
