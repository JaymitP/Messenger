const NavbarItem = ({ href, Icon }) => {
  return (
    <div className="flex justify-center cursor-pointer group w-14 sm:w-18  hover:text-white">
      <div className="opacity-0 group-hover:opacity-100 w-1 h-8 left-0 rounded-sm absolute bg-contrasting-dark"></div>
      <Icon className="w-6 h-8 mb-1 group-hover:fill-contrasting-dark group-hover:stroke-black group-hover:scale-125" />
    </div>
  );
};
export default NavbarItem;
