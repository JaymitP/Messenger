import Message from "./Message";
import { getMessageSnapshot, addMessage } from "../firebase";
import { useEffect, useState, useRef } from "react";

const Chat = ({ chatID, currentUserID }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    getMessageSnapshot(chatID, setMessages);
  }, [chatID]);

  useEffect(() => {
    scrollToBottom();
  });
  const submitMessage = (e) => {
    e.preventDefault();
    if (newMessage !== "") addMessage(currentUserID, chatID, newMessage);
    setNewMessage("");
    scrollToBottom("slow");
  };

  const scrollToBottom = (behaviour) => {
    ref.current?.scrollIntoView({ behaviour: behaviour });
  };

  return (
    <div className="w-[75vw] h-[90%]">
      <div className="p-4 h-full overflow-y-auto pb-20">
        {messages.map((message) => (
          <Message
            key={message.id}
            client={message.user === currentUserID}
            message={message.text}
          />
        ))}
        <div ref={ref}></div>
      </div>

      <div className="bg-secondary-dark p-4 bottom-0 absolute w-[75vw] justify-center flex">
        <form
          className="p-2 w-full rounded-xl bg-tertiary-dark"
          onSubmit={submitMessage}
        >
          <input
            className="w-full  bg-tertiary-dark"
            text="text"
            placeholder="Your Message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
