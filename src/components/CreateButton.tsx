export default function CreateButton() {
  const handleCreateClick = () => console.log("CLICKED");
  return (
    <button onClick={handleCreateClick} className="create-button">
      <img src="/assets/header/dropdown.svg" className="dropdown-icon" alt="drop"></img>
      <p className="create-button-text">New</p>
      <img src="/assets/header/Plus.svg" className="plus-icon" alt="plus"></img>
    </button>
  );
}
