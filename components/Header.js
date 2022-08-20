import { HiOutlineVideoCamera, HiOutlinePhone } from "react-icons/hi";
import Avatar from "./Avatar";

const Header = ({ targetUser }) => {
  return (
    <div className="bg-secondary-dark p-4 border-b-neutral-700 border-b-2 flex justify-between items-center">
      <div className="flex gap-4">
        <Avatar photoURL={targetUser.photoURL} />
        <div>
          <h1 className="text-title">{targetUser.name}</h1>
          <p className="text-small">{`Last seen ${targetUser.lastSeen}`}</p>
        </div>
      </div>
      <div className="Icons flex items-center gap-4 text-small">
        <HiOutlineVideoCamera />
        <HiOutlinePhone />
      </div>
    </div>
  );
};

export default Header;
