import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid items-center ">
        <div className="flex h-screen overflow-hidden">
          <Navbar />
          <Sidebar />
          <Chat />
        </div>
      </main>
    </div>
  );
}
