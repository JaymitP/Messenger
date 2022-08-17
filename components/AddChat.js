import { useState } from "react";
import { addChat } from "../firebase";

const AddChat = ({ currentUser }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();

    console.log(currentUser);
    // TODO: Input validation
    addChat(currentUser, text);

    // onAdd({ text, day, reminder })
  };

  const handleKeyDown = (e) => {
    if (eval.key === "Enter") {
      onSubmit(e);
    }
  };

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            className="input-small"
            type="text"
            placeholder="Add Chat"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
        {/* TODO: Add submit button for accessbility */}
      </form>
    </div>
  );
};

export default AddChat;
