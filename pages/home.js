import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import { getChats, getUsers } from "../firebase";
export default function Home({ userChats, targetUsers }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid items-center ">
        <div className="flex h-screen overflow-hidden">
          <Navbar />
          <Sidebar userChats={userChats} targetUsers={targetUsers} />
          <Chat />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const userChats = await getChats();
  const targetUsers = await getUsers(userChats);
  return {
    props: { userChats, targetUsers }, // will be passed to the page component as props
  };
}
