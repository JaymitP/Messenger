import Contact from "./Contact";

const Sidebar = () => {
  return (
    <div className="w-[20vw] bg-secondary-dark">
      <div className="sidebar_title">Title</div>
      <div className="search">Search</div>
      <div className="contacts">
        <Contact />
        <Contact />
        <Contact />
        <Contact />
        <Contact />
      </div>
    </div>
  );
};

export default Sidebar;
