import Contact from "./Contact";
import { HiPencilAlt, HiOutlineChat } from "react-icons/hi";
import { TiPin } from "react-icons/ti";

const Sidebar = () => {
  return (
    <div className="w-[20vw] bg-secondary-dark border-r-neutral-700 border-r-2">
      <div className="sidebar_title flex">
        <h1 className="text-white">Messages</h1>
        <HiPencilAlt className="fill-tertiary-dark" />
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="contacts">
        <div className="flex">
          <TiPin />
          <p>Pinned messages</p>
        </div>
        <Contact
          avatar={undefined}
          name="John Doe"
          message="Lorem Ipsum..."
          lastSeen="4:30pm"
          notification="2"
        />
        <div className="flex">
          <HiOutlineChat />
          <p>All messages</p>
        </div>
        <Contact
          avatar={undefined}
          name="John Doe"
          message="Lorem Ipsum..."
          lastSeen="4:30pm"
          notification="2"
        />
      </div>
    </div>
  );
};

export default Sidebar;
