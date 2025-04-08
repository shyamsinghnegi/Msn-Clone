// import React from "react";
// import Navbar from "./components/Navbar";
// import SearchBar from "./components/SearchBar";
// import ShortcutIcons from "./components/ShortcutIcons";
// import "./App.css";
// import MainPage from "./components/mainpage";

// const App = () => {
//   return (
//     <div className="background">
//       {/* <Navbar />
//       <div className="content">
//         <SearchBar />
//         <ShortcutIcons />
//       </div> */}
//     <MainPage/>
//     </div>
//   );
// };

// export default App;


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