import Avatar from "./Avatar";

const Message = ({ user }) => {
  return (
    <div>
      <h1>{user}</h1>
      <p className="inline-block py-2 px-4 rounded-tl-none rounded-xl bg-tertiary-dark">
        {"Yo whats up"}
      </p>
    </div>
  );
};

export default Message;
