//import ListGroup from "./components/ListGroup";

// calls the "ListGroup" function in ListGroup.tsx

import CreateButton from "./components/CreateButton";
import SortButtons from "./components/SortButtons";
import ListGroup from "./components/ListGroup";
import Skeleton from "react-loading-skeleton";
import Sidebar from "./components/Sidebar";
import Gallery from "./components/Gallery";

const App = () => {
  const items = ["San Francisco", "New York", "Tokyo", "Birmingham", "London"];

  const handleSortGroup = (_sort: number, group: number) => {};
  return (
    <>
      <header className="app-header">
        <div className="app-header-component + header-left-section">
          <Sidebar></Sidebar>
          <div>{CreateButton() || <Skeleton />}</div>
        </div>
        <div className="app-header-component">drawing tools</div>
        <div className="app-header-component">user account</div>
      </header>

      <section className="sort-order-section" id="sort-order-section">
        <SortButtons onSelectSort={handleSortGroup} />
      </section>
      <section className="image-gallery" id="image-gallery">
        <Gallery>Images</Gallery>
      </section>
    </>
  );
};

export default App;
