import React from 'react';
import './App.css';
import Header, { capitalizeName } from './components/Header'


function App() {
  return (
    <div className="App">
      {  capitalizeName("hello siiri")}
      <Header firstname="Alberto" lastname="Pagoria"/>
    </div>
  );
}

export default App;
