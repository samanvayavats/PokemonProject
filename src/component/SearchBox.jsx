import React from 'react';
import './SearchBox.css';

const SearchBox = ({ search, setSearch }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}> {/* Prevent form submission */}
        <input
          type="text"
          className="input-css"
          placeholder="Search Pokemon"
          value={search} // Bind input value to search state
          onChange={(e) => setSearch(e.target.value)} // Update search state on input change
        />
        <button type="submit" className="input-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
