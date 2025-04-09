import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import IconsGrid from './components/icongrid';
import SearchBox from './components/searchbox';
import SearchResults from './components/searchpage';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <SearchBox />
              <IconsGrid />
            </>
          } />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;