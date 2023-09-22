import React, { useState } from "react";
import "./App.css";

function chatBox() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <div className="mb-4">
        <div className="text-xl font-semibold">Chat Box</div>
      </div>
      <div className="mb-4 h-40 overflow-y-auto">
        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`mb-2 p-2 rounded-lg ${
                message.sender === "user"
                  ? "bg-blue-200 text-blue-800 self-end"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={handleInputChange}
          placeholder="Type a message..."
          className="flex-grow p-2 rounded-l-lg border-t border-b border-l focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg focus:outline-none"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default chatBox;
