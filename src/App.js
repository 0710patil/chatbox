import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "username" }]);
      setNewMessage("");
    }
  };

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
        <div className="text-xl font-semibold">Nams</div>
      </div>
      <div className="">
        <ul>
          {messages.map((message, index) => (
            <li
              key={index}
              className={`max-w-md mx-auto mt-6 mb-2 rounded-lg ${
                message.sender === "username"
                  ? "bg-blue-200 text-blue-800 p-2  text-lg self-end"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {message.text}
            </li>
          ))}
        </ul>

        <div className="w-screen h-screen flex justify-center items-center gap-3">
          <input
            type="text"
            value={newMessage}
            onChange={handleInputChange}
            placeholder="Send Message..."
            className="max-w-md  mt-8 text-left w-1/2 px-3 p-4 py-2 outline-none border-2 rounded-md"
          />
          <button
            onClick={handleSendMessage}
            className=" max-w-md mt-8 bg-blue-500 text-white px-3 py-2 rounded-md font-bold"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
