import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { IoChatboxEllipsesSharp, IoSend } from "react-icons/io5";
import { io, Socket } from "socket.io-client";
import { RiRobot3Fill } from "react-icons/ri";

interface Message {
  text: string;
  sender: "user" | "Utshav.AI";
}

const ChatModal = () => {
  const [show, setShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [typing, setTyping] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  const handleShow = () => {
    setShow(!show);
}
  const handleClose = () => setShow(false);
  useEffect(() => {
    const newSocket = io(apiUrl);
    setSocket(newSocket);

    newSocket.on("reply", (data: string) => {
      setTyping(false);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: data, sender: "Utshav.AI" },
      ]);
    });

    newSocket.on("typing", () => {
      setTyping(true);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [apiUrl]);

  const sendMessage = () => {
    if (socket && input.trim()) {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { text: input, sender: "user" },
      ]);
      socket.emit("message", input);
      setTyping(true);
      setInput("");
    }
  };

useEffect(() => {
    const timer = setTimeout(() => {
        handleShow();
    }, 5000);

    return () => clearTimeout(timer);
}, []);

  return (
    <>
    <Button variant="danger" className="bg-dark chat-btn" onClick={handleShow}>
      <IoChatboxEllipsesSharp size={40} />
    </Button>
  
    {show && (
      <div className="chat-modal">
        <div className="modal-header chat-modal-header text-white">
          <h5 className="modal-title">Utshav.AI Chat</h5>
          <button type="button" className="btn-close btn-close-white text-white" onClick={handleClose}></button>
        </div>
        <div className="chat-body">
          <div className="chat-container">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${
                  msg.sender === "user" ? "chat-message-user" : "chat-message-bot"
                }`}
              >
                <div
                  className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
                >
                  <strong>{msg.sender === "user" ? "You" : <RiRobot3Fill />}:</strong>{" "}
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="chat-message chat-message-bot">
                <div className="chat-bubble bot">
                  <em>Bot is typing...</em>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="modal-footer chat-modal-footer">
          <div className="chat-input-container">
            <Form.Control
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              className="chat-input"
            />
            <Button
              variant="primary"
              onClick={sendMessage}
              className="send-button"
            >
              <IoSend />
            </Button>
          </div>
        </div>
      </div>
    )}
  </>
  
  );
};

export default ChatModal;
