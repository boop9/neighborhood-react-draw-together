import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

interface Props {
  onSelectSort: (currentSort: number, CurrentGroup: number) => void;
}

const SortButtons = ({ onSelectSort }: Props) => {
  const sortitems = ["Last Modified", "Date Created", "Alphabetical"];
  const groupitems = ["Ascending", "Descending"];
  const [toggle, setToggle] = useState(false);
  const [currentSort, setCurrentSort] = useState(0);
  const [currentSortName, setCurrentSortName] = useState("Last Modified");
  const [currentGroup, setCurrentGroup] = useState(0);

  let rotate = 0;
  const dropdownToggle = () => {
    setToggle(!toggle);
    console.log(toggle);

    rotate = rotate + 180;
    const icon = document.getElementById("chevron")!;
    icon.style.transform = "rotate(" + { rotate } + "deg)";
  };

  return (
    <div className="dropdown-container">
      <button className="sort-dropdown-toggle" onClick={() => dropdownToggle()}>
        {currentSortName}
        <ChevronDown className="dropdown-chevron" id="chevron" />
      </button>
      <div
        className={toggle === true ? "dropdown-elements" : "hidden"}
        id="dropdownElements"
      >
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

        <p className="order-heading">Order</p>

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

export default SortButtons;
