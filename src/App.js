import React from 'react';
import './App.css';
import Header from './components/header';
import IconsGrid from './components/icongrid';
import SearchBox from './components/searchbox';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBox />
      <IconsGrid />
    </div>
  );
}

export default App;