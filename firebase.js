import { getApps, initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  addDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLpcpQe5-_SPQPLAOXdLzyiIZ535qripY",
  authDomain: "whatsapp-9b44f.firebaseapp.com",
  projectId: "whatsapp-9b44f",
  storageBucket: "whatsapp-9b44f.appspot.com",
  messagingSenderId: "381790802142",
  appId: "1:381790802142:web:0d4248a6ec9659bd4fb24f",
  measurementId: "G-LW6PLXXLW1",
};

const app = !getApps.length ? initializeApp(firebaseConfig) : app;
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

// Allows option to change the sign in method
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};

export const updateUser = async (user) => {
  const userRef = doc(db, "users", user.uid);
  await setDoc(
    userRef,
    {
      name: user.displayName,
      email: user.email,
      lastSeen: serverTimestamp(),
      photoURL: user.photoURL,
    },
    { merge: true }
  );
};

// TODO: Hash current user uid and other user uid to generate a unique chat id, to avoid chat rooms with the same users
const getChatId = (uid1, uid2) => {
  return uid1 + uid2;
};

export const addChat = async (currentUser, targetUserEmail) => {
  // TODO: Get target user from email
  const targetUserUID = "eA2pqArzV6eBPsAaSBlqc3NaMFl2";

  const chatRef = doc(db, "chats", getChatId(currentUser.uid, targetUserUID));
  await setDoc(
    chatRef,
    {
      users: [currentUser.uid, targetUserUID],
    },
    { merge: true }
  );
};
