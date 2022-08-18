import Image from "next/image";
import Avatar from "./Avatar";
const Contact = ({ avatar, name, message, lastSeen, notification }) => {
  return (
    <div className="flex my-2 gap-2 items-center">
      <Avatar photoURL={avatar} />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h1 className="text-title ">{name}</h1>
          <p className="text-small">{lastSeen}</p>
        </div>

        <div className="flex justify-between items-center bottom-2">
          <p className="text-small"> {message}</p>
          <span className="bg-red-500 px-[0.25rem] rounded-full text-xs ">
            {notification}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
