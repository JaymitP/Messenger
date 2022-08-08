import {
  HiOutlineViewGrid,
  HiOutlineCalendar,
  HiOutlineChat,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineBell,
} from "react-icons/hi";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="w-[5vw] grid border-r-neutral-700 border-r-2">
      <div className="flex flex-col items-center gap-8">
        {/* Primary Icons */}
        <NavbarItem href="" Icon={HiOutlineViewGrid} />
        <NavbarItem href="" Icon={HiOutlineCalendar} />
        <NavbarItem href="" Icon={HiOutlineChat} />
        <NavbarItem href="" Icon={HiOutlineUsers} />
      </div>
      <div className="flex flex-col items-center gap-8">
        {/* Secondary Icons */}
        <NavbarItem href="" Icon={HiOutlineCog} />
        <NavbarItem href="" Icon={HiOutlineBell} />
      </div>
      <div>Profile</div>
    </div>
  );
};

export default Navbar;
