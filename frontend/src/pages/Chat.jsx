import { useState } from "react";
import axios from "axios";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const send = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.post("http://localhost:5000/api/chat", { message: input },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setMessages([...messages, { from: "user", text: input }, { from: "bot", text: res.data.reply }]);
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((m, i) => <p key={i}><strong>{m.from}:</strong> {m.text}</p>)}
      </div>
      <input value={input} onChange={e=>setInput(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
