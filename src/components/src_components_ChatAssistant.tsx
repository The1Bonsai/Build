import React, { useState } from "react";
import { sendMessageToAI } from "../utils/aiService";
import "./ChatAssistant.css";

const initialMessages = [
  { role: "bot", content: "👋 Hi, I'm BuildBot! What Android app do you want to create today?" }
];

const ChatAssistant: React.FC = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    const response = await sendMessageToAI(input);
    setMessages([...newMessages, { role: "bot", content: response }]);
    setLoading(false);
  };

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`msg-bubble ${msg.role}`}>
            {msg.content}
          </div>
        ))}
        {loading && <div className="msg-bubble bot">...</div>}
      </div>
      <div className="chat-input-row">
        <input
          className="chat-input"
          value={input}
          disabled={loading}
          placeholder="Describe your app or ask for code help…"
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleSend()}
        />
        <button className="send-btn" onClick={handleSend} disabled={loading}>
          <span role="img" aria-label="send">🎈</span>
        </button>
      </div>
    </div>
  );
};

export default ChatAssistant;