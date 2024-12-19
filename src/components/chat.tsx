import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { io, Socket } from "socket.io-client";
import { RiRobot3Fill } from "react-icons/ri";

interface Message {
  text: string;
  sender: "user" | "Utshav.AI";
}

const ChatModal = () => {
  const [show, setShow] = useState(false);
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState<Message[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [typing, setTyping] = useState<boolean>(false);
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log(apiUrl);

  const handleShow = () => setShow(true);
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

  return (
    <>
      <Button variant="danger" className="bg-dark chat-btn" onClick={handleShow}>
        <IoChatboxEllipsesSharp size={40} />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Utshav.AI</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ maxHeight: "300px", overflowY: "auto" }}>
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  textAlign: msg.sender === "user" ? "right" : "left",
                }}
              >
                <strong>{msg.sender === "user" ? "You" : <RiRobot3Fill/>}:</strong>{" "}
                {msg.text}
              </div>
            ))}
            {typing && <div><em>Bot is typing...</em></div>}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Form.Control
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendMessage}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ChatModal;
