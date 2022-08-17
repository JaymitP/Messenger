import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, updateUser } from "../firebase";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      updateUser(user);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user)
    return (
      <button onClick={signInWithGoogle} className="bg-contrasting-dark">
        log in
      </button>
    );
  return <Component {...pageProps} />;
}

export default MyApp;
