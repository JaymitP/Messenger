const Message = ({ client, message, time }) => {
  return (
    <div className={`my-4 flex ${client ? "justify-end" : ""}`}>
      <div className="max-w-[45%] relative">
        <p
          className={`inline-block py-2 px-4 rounded-md pr-16 ${
            client
              ? "bg-contrasting-dark rounded-tr-none"
              : "bg-tertiary-dark rounded-tl-none"
          }`}
        >
          {message}
        </p>
        <div className="absolute bottom-1 right-1 text-[.7rem] text-gray-200">
          {(!time ? new Date() : new Date(time)).toLocaleTimeString([], {
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;
