import React from 'react';
import Sidebar from './components/Sidebar';
import Twitter from './components/Twitter';
import Trends from './components/Trends';


import './App.css';

function App() {
  return (
    <div className="twitter">
      <Sidebar/>
      <Twitter/>
      <Trends/>
    </div>
  );
}

export default App;
