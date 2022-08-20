import Avatar from "./Avatar";
import Message from "./Message";
import { HiOutlineVideoCamera, HiOutlinePhone } from "react-icons/hi";
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
    <div className="w-[75vw]">
      <div className="bg-secondary-dark p-4 border-b-neutral-700 border-b-2 flex justify-between items-center">
        <div className="flex gap-4">
          <Avatar
            photoURL={
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
          />
          <div>
            <h1 className="text-title">{chatID}</h1>
            <p className="text-small">{`Last seen ${lastSeen}`}</p>
          </div>
        </div>
        <div className="Icons flex items-center gap-4 text-small">
          <HiOutlineVideoCamera />
          <HiOutlinePhone />
        </div>
      </div>

      <div className="p-4 overflow-y-auto h-full pb-20">
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
