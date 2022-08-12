import Avatar from "./Avatar";

const Message = ({ user }) => {
  return (
    <div className="my-4">
      <h1>{user}</h1>
      <p className="inline-block py-2 px-4 rounded-tl-none rounded-md bg-tertiary-dark">
        {"Yo whats up"}
      </p>
    </div>
  );
};

export default Message;
