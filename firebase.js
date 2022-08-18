import { getApps, initializeApp } from "firebase/app";
import {
  getFirestore,
  setDoc,
  addDoc,
  doc,
  collection,
  where,
  query,
  getDoc,
  getDocs,
  serverTimestamp,
  onSnapshot,
  documentId,
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

const getUserByEmail = async (email) => {
  const q = query(collection(db, "users"), where("email", "==", email));

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs[0];
};

export const addChat = async (currentUser, targetUserEmail) => {
  const targetUser = await getUserByEmail(targetUserEmail);

  if (!targetUser) throw new Error("User not found");

  const chatRef = doc(db, "chats", getChatId(currentUser.uid, targetUser.id));
  await setDoc(
    chatRef,
    {
      users: [currentUser.uid, targetUser.id],
    },
    { merge: true }
  );
};

export const addMessage = async (currentUser, targetUser, text) => {
  const messageRef = collection(
    db,
    "chats",
    getChatId(currentUser.uid, targetUser.id),
    "messages"
  );
  await addDoc(
    messageRef,
    {
      text,
      timestamp: serverTimestamp(),
    },
    { merge: true }
  );
};

export const getChats = async (currentUser, setChats, setUsers) => {
  const userChatsRef = query(
    collection(db, "chats"),
    where("users", "array-contains", currentUser.uid)
  );

  onSnapshot(userChatsRef, (snapshot) => {
    const chats = snapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setChats(chats);

    const userIDs = chats.map((chat) =>
      chat.users.find((user) => user !== currentUser.uid)
    );
    const usersRef = query(
      collection(db, "users"),
      where(documentId(), "in", userIDs)
    );
    onSnapshot(usersRef, (snapshot) =>
      setUsers(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      )
    );
  });
};
