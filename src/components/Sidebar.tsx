import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebarState, sidebarToggle] = useState(true);
  return (
    <>
      <button
        className="burger-menu-button"
        onClick={() => {
          const newState = !sidebarState;
          sidebarToggle(newState);
          document.cookie = `sidebarState=${newState}; path=/; max-age=31536000`; // 1 year
          console.log({ newState });
        }}
      >
        <Menu strokeWidth={2} className="icon burger-menu-icon"></Menu>
      </button>
      <aside className={sidebarState ? "sidebar" : "sidebar closed"}>
        <nav className="nav-menu">
          <ul className="nav-list">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} title={item.title}>
                  <button className={item.cName + "-container"}>
                    {item.icon}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
