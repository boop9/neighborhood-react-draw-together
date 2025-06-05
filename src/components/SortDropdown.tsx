import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onSelectSort: (currentSort: number, CurrentGroup: number) => void;
}

const SortDropdown = ({ onSelectSort }: Props) => {
  const sortitems = ["Last Modified", "Date Created", "Alphabetical"];
  const groupitems = ["Ascending", "Descending"];
  const [toggle, setToggle] = useState(false);
  const [currentSort, setCurrentSort] = useState(0);
  const [currentSortName, setCurrentSortName] = useState("Last Modified");
  const [currentGroup, setCurrentGroup] = useState(0);

  const dropdownToggle = () => {
    setToggle(!toggle);
    console.log(toggle);

    let rotate = toggle === false ? "rotate(180deg)" : "rotate(0deg)";
    let brightness: string = toggle ? "100%" : "120%";
    const icon = document.getElementById("chevron")!;
    const SortDropdownContainer = document.getElementById(
      "sortdropdowncontainer"
    )!;
    icon.style.transform = rotate;
    SortDropdownContainer.style.filter = "brightness(" + brightness + ")";
  };

  return (
    <div className="dropdown-container">
      <button
        className="sort-dropdown-toggle"
        id="sortdropdowncontainer"
        onClick={() => dropdownToggle()}
      >
        {currentSortName}
        <ChevronDown className="dropdown-chevron" id="chevron" />
      </button>
      <div
        className={toggle === true ? "dropdown-elements" : "hidden"}
        id="dropdownElements"
      >
        <p className="dropdown-inner-heading">Sort</p>

        {sortitems.map((item, index) => (
          <button
            key={item}
            className="dropdown-button"
            id={index.toString()}
            onClick={() => {
              console.log(item);
              setCurrentSortName(item);
              setCurrentSort(index);
              dropdownToggle();
              onSelectSort(currentSort, currentGroup);
              console.log(currentSort, currentGroup);
            }}
          >
            {item}
          </button>
        ))}

        <p className="dropdown-inner-heading top-border">Order</p>

        {groupitems.map((groupitem, index) => (
          <button
            key={groupitem}
            className="dropdown-button"
            id={index.toString()}
            onClick={() => {
              console.log(groupitem);
              setCurrentGroup(index);
              dropdownToggle();
              onSelectSort(currentSort, currentGroup);
              useEffect(() => {
                console.log(currentSort, currentGroup);
              });
            }}
          >
            {groupitem}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortDropdown;
