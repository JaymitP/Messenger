import {
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineLogout,
} from "react-icons/hi";
import NavbarItem from "./NavbarItem";
import Avatar from "./Avatar";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {
  const [currentUser] = useAuthState(auth);
  return (
    <div className="w-[5vw] flex flex-col justify-between border-r-neutral-700 border-r-2">
      <div className="flex flex-col h-screen justify-between ">
        <div className="flex flex-col items-center gap-8">
          {/* Primary Icons */}
          <div className="my-6">
            <Avatar
              src={
                "https://dieselpunkcore.com/wp-content/uploads/2014/06/logo-placeholder.png"
              }
            />
          </div>
          <NavbarItem href="" Icon={HiOutlineViewGrid} />
          <NavbarItem href="" Icon={HiOutlineCalendar} />
          <NavbarItem href="" Icon={HiOutlineChat} />
          <NavbarItem href="" Icon={HiOutlineUsers} />
        </div>
        <div className="flex flex-col items-center gap-8 mb-4">
          {/* Secondary Icons */}
          <NavbarItem href="" Icon={HiOutlineBell} />
          <NavbarItem
            onClick={() => {
              auth.signOut();
            }}
            Icon={HiOutlineLogout}
          />
        </div>
      </div>

      <div className="flex flex-col items-center mb-4">
        <Avatar src={currentUser.photoURL} shape={"rounded-xl scale-90"} />
      </div>
    </div>
  );
};

export default Navbar;
