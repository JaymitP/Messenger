import Image from "next/image";
import { signInWithGoogle } from "../firebase";

const Login = () => {
  return (
    <div className="w-screen h-screen">
      <div className="p-4 w-1/4 absolute left-10 top-24">
        <h1 className="mb-4 text-8xl font-semibold">Messenger</h1>
        <h2 className="text-2xl mb-20 20text-[#838383w]">
          A simple messenging app
        </h2>
        <button
          onClick={signInWithGoogle}
          className="bg-white text-secondary-dark  text-2xl p-2 rounded-sm font-semibold flex items-center gap-4"
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            width={30}
            height={30}
          />
          Sign in with Google
        </button>
      </div>
      <div className="absolute bottom-0 right-10">
        <Image src="/plane.png" width={1200} height={690} />
      </div>
    </div>
  );
};

export default Login;
