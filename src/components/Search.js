import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="Hey buddy, tell me...What are you looking for ?"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
