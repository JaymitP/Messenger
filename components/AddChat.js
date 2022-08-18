import { useState } from "react";
import { addChat } from "../firebase";

const AddChat = ({ currentUser }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    // TODO: Input validation
    if (text === currentUser.email)
      return alert("You can't send a chat to yourself");
    addChat(currentUser, text);

    // onAdd({ text, day, reminder })
  };

  const handleKeyDown = (e) => {
    if (eval.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <form className="add-form w-full" onSubmit={onSubmit}>
      <input
        className="input-small"
        type="email"
        placeholder="Add Chat"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {/* TODO: Add submit button for accessbility */}
    </form>
  );
};

export default AddChat;
