import Sidebar from "../components/Sidebar";
import ChatBody from "../components/ChatBody";
import { useEffect, useState } from "react";
import { auth, getSnapshots } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Chat = ({ userChats, targetUsers, firstChat }) => {
  const [currentUser] = useAuthState(auth);

  const [currentChat, setCurrentChat] = useState(firstChat);
  const [chats, setChats] = useState(userChats);
  const [users, setUsers] = useState(targetUsers);

  useEffect(() => {
    getSnapshots(currentUser, setChats, setUsers);
  }, []);
  return (
    <>
      <Sidebar chats={chats} users={users} setCurrentChat={setCurrentChat} />
      <ChatBody chatID={currentChat} currentUserID={currentUser.uid} />
    </>
  );
};

export default Chat;
