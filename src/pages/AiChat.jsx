import { useState, useEffect, useRef } from "react";
import "../css/Common.css";
import sendPointer from "../assets/images/sendPointer.svg";
import ProjectLogo from "../assets/images/ProjectLogo.svg";
import api from "../utils/axios";

function AiChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatAreaRef = useRef(null);
  const sendMessage = async () => {
    if (!input.trim()) {
      const botMsg = {
        sender: "ai",
        text: "뭘 먹고 싶은지 말해줘야 추천해줄 수 있어유~",
      };
      setMessages((prev) => [...prev, botMsg]);
      return;
    }

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await api.post("/chat", {
        userId: "guest",
        message: input,
      });
      //응답, 추천식당
      const { response, recommendedStores } = res.data;
      const aiMsg = {
        sender: "ai",
        text: response,
        stores: recommendedStores,
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      const aiMsg = {
        sender: "ai",
        text: "지금 서버 오류가 있어유.. 나중에 다시 시도해줘유ㅠㅠ",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }

    setInput("");
  };
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="aibg">
      <div className="content">
        <img className="aiImg" src={ProjectLogo} />
        <div className="textWrapper">
          오늘 뭐 묵고 싶은겨~? <br />
          찬밥이여 따신 국물이여~ 분위기도 말해봐유
          <br />
          내가 싹 다 추천해줄텨~
        </div>
        <div className="chatContainer ">
          <div className="chatArea" ref={chatAreaRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`chatBubble ${msg.sender}`}>
                <p>{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="inputArea">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="텍스트를 입력하세요."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          ></input>
          <img src={sendPointer} onClick={sendMessage}></img>
        </div>
      </div>
    </div>
  );
}

export default AiChat;
