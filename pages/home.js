import Head from "next/head";
import Navbar from "../components/Navbar";
import Chat from "../components/Chat";
import {
  getChats,
  getUsers,
  getMessages,
  unsubscribeSnapshots,
} from "../firebase";
export default function Home({
  userChats,
  targetUsers,
  firstChat,
  firstChatMessages,
}) {
  return (
    <div>
      <Head>
        <title>Messenger</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid items-center ">
        <div className="flex h-screen overflow-hidden">
          <Navbar />
          <Chat
            userChats={userChats}
            targetUsers={targetUsers}
            firstChat={firstChat}
            firstChatMessages={firstChatMessages}
          />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  unsubscribeSnapshots();
  const userID = context.req.cookies.userID;
  const userChats = await getChats(userID);
  const targetUsers = await getUsers(userChats, userID);
  const firstChatMessages = await getMessages(userChats[0].id);
  return {
    props: {
      userChats,
      targetUsers,
      firstChat: userChats[0].id,
      firstChatMessages: firstChatMessages,
    }, // will be passed to the page component as props
  };
}
