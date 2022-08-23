import Sidebar from "../components/Sidebar";
import ChatBody from "../components/ChatBody";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { auth, getSnapshots } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = ({ userChats, targetUsers, firstChat, firstChatMessages }) => {
  const [currentUser] = useAuthState(auth);

  const [currentChat, setCurrentChat] = useState(firstChat);
  const [chats, setChats] = useState(userChats);
  const [users, setUsers] = useState(targetUsers);

  useEffect(() => {
    getSnapshots(currentUser, setChats, setUsers);
  }, []);

  const getCurrentChatTarget = () => {
    const chatData = chats.find((chat) => chat.id === currentChat);
    const otherUser = chatData.users.find((user) => user !== currentUser.uid);
    const contactData = users?.find((user) => user.id === otherUser);
    return contactData;
  };

  return (
    <>
      <Sidebar chats={chats} users={users} setCurrentChat={setCurrentChat} />
      <div>
        <Header targetUser={getCurrentChatTarget()} />
        <ChatBody
          chatID={currentChat}
          currentUserID={currentUser.uid}
          initialMessages={firstChatMessages}
        />
      </div>
    </>
  );
};

export default Chat;
