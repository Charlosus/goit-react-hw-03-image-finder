import { HiMagnifyingGlass } from 'react-icons/hi2';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button className="SearchForm-button" type="submit">
          <HiMagnifyingGlass size="24px" />
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          name="search"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search image and photo"
        ></input>
      </form>
    </header>
  );
};
