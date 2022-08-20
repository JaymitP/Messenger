import Message from "./Message";
import { getMessageSnapshot, addMessage } from "../firebase";
import { useEffect, useState } from "react";

const Title = "Title";
const lastSeen = "14 hours ago";
const Chat = ({ chatID, currentUserID }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    getMessageSnapshot(chatID, setMessages);
  }, [chatID]);

  const submitMessage = (e) => {
    e.preventDefault();
    if (newMessage !== "") addMessage(currentUserID, chatID, newMessage);
    setNewMessage("");
  };
  return (
    <div className="w-[75vw] h-full">
      <div className="p-4 h-full overflow-y-auto pb-40">
        {messages.map((message) => (
          <Message
            key={message.id}
            client={message.user === currentUserID}
            message={message.text}
          />
        ))}
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
