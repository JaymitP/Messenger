import Image from "next/image";
import Avatar from "./Avatar";
const Contact = ({ avatar, name, message, lastSeen, notification }) => {
  return (
    <div className="flex mb-4">
      <Avatar src={avatar} />
      <div className="contact_name flex justify-between">
        <div>
          <h1>{name}</h1>
          <p> {message}</p>
        </div>
        <div>
          <p>{lastSeen}</p>
          <span className="bg-red-500 py-[4px] px-[10px] rounded-full">
            {notification}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
