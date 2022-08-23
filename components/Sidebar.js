import Contact from "./Contact";
import { HiPencilAlt, HiPlus, HiSearch } from "react-icons/hi";
import { TiPin } from "react-icons/ti";
import AddChat from "./AddChat";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from "react";

const Sidebar = ({ chats, users, setCurrentChat }) => {
  const [currentUser] = useAuthState(auth);
  const [showAddChat, setShowAddChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-[20vw] bg-secondary-dark border-r-neutral-700 border-r-2">
      <div className="sidebar_title p-6 text-3xl flex justify-between items-center">
        <h1 className="font-semibold">Messages</h1>
        <HiPencilAlt
          className="fill-contrasting-dark text-2xl cursor-pointer"
          onClick={() => setShowAddChat(!showAddChat)}
        />
      </div>

      <div className="p-6">
        {showAddChat ? (
          <div className="flex items-center bg-tertiary-dark text-m rounded-md mb-2 px-1">
            <AddChat currentUser={currentUser} />
            {/* <HiPlus className="text-secondary-font-dark text-xl mr-2" /> */}
          </div>
        ) : null}

        <div className="flex items-center bg-tertiary-dark text-m rounded-md">
          <HiSearch className="m-2 fill-[#8294a6]" />
          <input
            className="input-small pr-2"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search"
          />
        </div>
      </div>

      <div className="">
        {/* <div className="flex items-center gap-2 text-sm text-small px-6">
          <TiPin />
          <p>PINNED</p>
        </div> */}
        <div className="flex items-center gap-2 text-sm text-small px-6">
          <TiPin />
          <p>ALL MESSAGES</p>
        </div>

        {chats.map((chat) => {
          const otherUser = chat.users.find((user) => user !== currentUser.uid);
          const contactData = users?.find((user) => user.id === otherUser);
          if (!contactData) return null;
          if (
            searchQuery &&
            !contactData.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
            return null;
          return (
            <Contact
              key={chat.id}
              photoURL={contactData.photoURL}
              name={contactData.name}
              lastSeen={contactData.lastSeen.substring(0, 16).replace(/T/, " ")}
              onClick={() => {
                setCurrentChat(chat.id);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
