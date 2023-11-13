import "./style.css";
import { useRef } from "react";

function Search({ onSearch }) {
  let inputSearchElement = useRef(null);

  function showValue() {
    const searchValue = inputSearchElement.current.value;
    onSearch(searchValue);
  }

  return (
    <div className="search-container" data-testid="search-container">
      <input
        className="input-search"
        onChange={showValue}
        ref={inputSearchElement}
        type="text"
        placeholder="Buscar..."
      />
      <div className="search-icon" onClick={showValue}>
        <i className="fas fa-search"></i>
      </div>
    </div>
  );
}

export default Search;