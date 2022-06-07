import React from 'react';
import Header from "./Components/Header.js";
import './Components/Style.css';
import Type from "./Components/Type";

const App = () => {
  return (
    <div>
      <div class = 'header' >
        <Header 
          headername = {"Twitter"}
          />
      </div>
      <div class = 'header1'>
        <h1>What's happening?</h1>
     </div>
     <div class = 'createTweet'>
       <Type/>
     </div>

    </div>
  );
}
export default App;
