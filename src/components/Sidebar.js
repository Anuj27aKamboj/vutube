import React from "react";
import { useSelector } from "react-redux";
import SidebarIcon from "./SidebarIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const Section = ({ title, children }) => (
    <div className="border-b border-gray-200 pb-3 mb-3">
      {title && <h2 className="px-2 py-2 font-semibold">{title}</h2>}
      {children}
    </div>
  );

  return (
    <aside
      className={`fixed left-0 top-14 pt-2 h-[calc(100vh-56px)] bg-white z-40
      ${isMenuOpen ? "w-60" : "w-20"}
      overflow-y-auto transition-all duration-200`}
    >
      {/* COLLAPSED SIDEBAR */}
      {!isMenuOpen && (
        <div className="flex flex-col items-center pt-2 px-3 gap-6">
          <SidebarIcon to="/" img="./home.png" label="Home" />
          <SidebarIcon img="./clip.png" label="Clips" />
          <SidebarIcon img="./subscriptions.png" label="Subs" />
          <SidebarIcon img="./user-icon.png" label="You" />
        </div>
      )}

      {/* EXPANDED SIDEBAR */}
      {isMenuOpen && (
        <div className="px-3 py-2 text-sm">
          <Section>
            <SidebarItem to="/" img="./home.png" label="Home" />
            <SidebarItem img="./clip.png" label="Clips" />
            <SidebarItem img="./subscriptions.png" label="Subscriptions" />
          </Section>

          <Section title="You">
            <SidebarItem img="./user-icon.png" label="Your channel" />
          </Section>

          <Section title="Explore">
            {[
              "Shopping",
              "Music",
              "Films",
              "Live",
              "Gaming",
              "News",
              "Sport",
            ].map((item) => (
              <p
                key={item}
                className="py-2 px-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </p>
            ))}
          </Section>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
