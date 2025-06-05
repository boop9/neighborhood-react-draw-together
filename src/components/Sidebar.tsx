import { useState } from "react";
import { Menu } from "lucide-react";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [sidebarState, sidebarToggle] = useState(true);
  return (
    <div className="sidebar-container">
      <aside className={sidebarState ? "sidebar" : "sidebar closed"}>
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
        <nav className="nav-menu">
          <ul className="nav-list">
            {SidebarData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="nav-button-container"
                  title={item.title}
                >
                  <button className="nav-button">{item.icon}</button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
