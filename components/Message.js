const Message = ({ client, message }) => {
  return (
    <div className={`my-4 flex ${client ? "justify-end" : ""}`}>
      <div>
        {/* <h1>{user}</h1> */}
        <p
          className={`inline-block py-2 px-4 rounded-md ${
            client
              ? "bg-contrasting-dark rounded-tr-none"
              : "bg-tertiary-dark rounded-tl-none"
          }`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default Message;
