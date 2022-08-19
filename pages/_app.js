import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, updateUser } from "../firebase";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

function MyApp({ Component, pageProps }) {
  const [user, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      updateUser(user);
      setCookie("userID", user.uid);
    }
  }, [user]);

  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) {
    // if (Component.name !== "Landing") window.location.href = "/";
    return (
      <button onClick={signInWithGoogle} className="bg-contrasting-dark">
        log in
      </button>
    );
  }
  return <Component {...pageProps} userID={user.uid} />;
}

export default MyApp;
