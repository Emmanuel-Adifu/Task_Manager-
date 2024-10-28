import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery, filterCompleted, setFilterCompleted }) => {
  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search tasks..."
        />
        <span className="search-icon">🔍</span>
      </div>
      
      <select
        value={filterCompleted}
        onChange={(e) => setFilterCompleted(e.target.value)}
        className="filter-select"
      >
        <option value="all">All Tasks</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
};

export default SearchBar;