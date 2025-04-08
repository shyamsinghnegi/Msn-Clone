import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../stylesheets/SearchBox.css';

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const performSearch = () => {
    if (searchQuery.trim() !== '') {
      window.open(`https://www.bing.com/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      performSearch();
    }
  };

  const openCopilot = () => {
    window.open('https://copilot.microsoft.com');
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <FaSearch className="search-icon" onClick={performSearch} />
        <input
          type="text"
          className="search-box"
          placeholder="Search the web"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="copilot-button" onClick={openCopilot}>
          <img 
            src="https://adoption.microsoft.com/wp-content/uploads/2023/09/icon-copilot.svg" 
            alt="Microsoft Copilot" 
            className="copilot-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;