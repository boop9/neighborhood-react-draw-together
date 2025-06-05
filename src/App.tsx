//import ListGroup from "./components/ListGroup";

// calls the "ListGroup" function in ListGroup.tsx

import CreateButton from "./components/CreateButton";
import Skeleton from "react-loading-skeleton";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";
import SortDropdown from "./components/SortDropdown";
import { Link } from "react-router-dom";

const App = () => {
  const handleSortGroup = (_sort: number, _group: number) => {};
  return (
    <>
      <div className="page-container">
        <header className="app-header">
          <div className="app-header-component + header-left-section">
            <div>{CreateButton() || <Skeleton />}</div>
          </div>
          <div className="app-header-component">drawing tools</div>
          <div className="app-header-component registration-button-container">
            <Link to="/sign-in" className="registration-button login-button">
              LOG IN
            </Link>
            <Link to="/sign-up" className="registration-button signup-button">
              SIGN UP
            </Link>
          </div>
        </header>
        <Sidebar></Sidebar>
        <section className="main-section">
          <section className="sort-order-section" id="sort-order-section">
            <SortDropdown onSelectSort={handleSortGroup} />
          </section>
          <section className="image-gallery" id="image-gallery">
            <Gallery>Images</Gallery>
          </section>
        </section>
      </div>
    </>
  );
};

export default App;
