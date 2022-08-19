import Avatar from "./Avatar";
import Message from "./Message";
import { HiOutlineVideoCamera, HiOutlinePhone } from "react-icons/hi";

const Title = "Title";
const lastSeen = "14 hours ago";
const Chat = () => {
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
            <h1 className="text-title">{Title}</h1>
            <p className="text-small">{`Last seen ${lastSeen}`}</p>
          </div>
        </div>
        <div className="Icons flex items-center gap-4 text-small">
          <HiOutlineVideoCamera />
          <HiOutlinePhone />
        </div>
      </div>

      <div className="p-4 overflow-y-auto h-full pb-20">
        <Message user={Title} />
        <Message user={Title} />
        <Message user={Title} />
        <Message user={Title} />
      </div>

      <div className="bg-secondary-dark p-4 bottom-0 absolute w-[75vw] justify-center flex">
        <input
          className="p-2 w-full rounded-xl bg-tertiary-dark"
          type="text"
          placeholder="Your Message"
        />
      </div>
    </div>
  );
};

export default Chat;
