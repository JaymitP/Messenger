import Contact from "./Contact";
import { HiPencilAlt, HiOutlineChat, HiSearch } from "react-icons/hi";
import { TiPin } from "react-icons/ti";
import AddChat from "./AddChat";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [currentUser] = useAuthState(auth);

  return (
    <div className="w-[20vw] bg-secondary-dark border-r-neutral-700 border-r-2">
      <div className="sidebar_title p-6 text-3xl flex justify-between items-center">
        <h1 className="font-semibold">Messages</h1>
        <HiPencilAlt className="fill-contrasting-dark text-2xl" />
      </div>

      <div className="p-6">
        <div className="flex items-center bg-tertiary-dark text-m rounded-md">
          <AddChat currentUser={currentUser} />
        </div>
        <div className="flex items-center bg-tertiary-dark text-m rounded-md">
          <HiSearch className="m-2 fill-[#8294a6]" />
          <input className="input-small" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-small">
          <TiPin />
          <p>PINNED</p>
        </div>
        <Contact
          avatar={undefined}
          name="John Doe"
          message="Lorem Ipsum..."
          lastSeen="4:30pm"
          notification="2"
        />
        <div className="flex items-center gap-2 text-sm text-small mt-8">
          <TiPin />
          <p>ALL MESSAGES</p>
        </div>
        <Contact
          avatar={undefined}
          name="John Doe"
          message="Lorem Ipsum..."
          lastSeen="4:30pm"
          notification="1"
        />
      </div>
    </div>
  );
};

export default Sidebar;
