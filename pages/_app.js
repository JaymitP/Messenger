import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, updateUser } from "../firebase";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
import Login from "../components/Login";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      updateUser(user);
      setCookie("userID", user.uid);
    }
  }, [user]);

  if (error) return <div>Error: {error.message}</div>;
  if (!user) {
    return <Login />;
  }
  return <Component {...pageProps} userID={user.uid} />;
}

export default MyApp;
