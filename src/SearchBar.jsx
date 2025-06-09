export const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search image and photo"
        ></input>
      </form>
    </header>
  );
};
