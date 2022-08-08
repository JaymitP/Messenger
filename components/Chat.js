import Avatar from "./Avatar";
import Message from "./Message";

const Title = "Title";
const lastSeen = "14 hours ago";
const Chat = () => {
  return (
    <div className="w-[75vw]">
      <div className="bg-secondary-dark p-4 border-b-neutral-700 border-b-2">
        <div className="flex">
          <Avatar
            src={
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            }
          />
          <div>
            <h1>{Title}</h1>
            <p>{`Last seen ${lastSeen}`}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
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
