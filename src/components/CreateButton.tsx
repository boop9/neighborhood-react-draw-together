export default function CreateButton() {
  const handleCreateClick = () => console.log("CLICKED");
  return (
    <button onClick={handleCreateClick} className="create-button">
      <img src="src/assets/header/dropdown.svg" className="dropdown-icon"></img>
      <p className="create-button-text">New</p>
      <img src="src/assets/header/Plus.svg" className="plus-icon"></img>
    </button>
  );
}
