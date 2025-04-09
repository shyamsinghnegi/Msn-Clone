import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../stylesheets/SearchResults.css';

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/search?q=${query}`);
        const data = await response.json();
        setResults(data);
      } catch (err) {
        console.error('Search failed:', err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  return (
    <div className="search-results">
      <h2>Search Results for "{query}"</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div className="results-list">
          {results.map((result) => (
            <div key={result._id} className="result-item">
              <h3>
                <a href={result.url} target="_blank" rel="noopener noreferrer">
                  {result.name}
                </a>
              </h3>
              <p className="url">{result.url}</p>
              <p className="description">{result.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No results found for your search.</p>
      )}
    </div>
  );
};

export default SearchResults;