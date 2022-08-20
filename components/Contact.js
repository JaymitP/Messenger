import Avatar from "./Avatar";
const Contact = ({
  photoURL,
  name,
  message,
  lastSeen,
  notification,
  onClick,
}) => {
  return (
    <div
      className="flex px-6 py-2 gap-2 items-center cursor-pointer hover:bg-tertiary-dark"
      onClick={onClick}
    >
      <Avatar photoURL={photoURL} />
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
