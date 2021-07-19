import axios from 'axios';
import SimpsonQuotes from "./component/SimpsonQuotes";
import React, { useEffect, useState } from "react";

import './App.css';



function App() {

  const getQuote = () => {
    axios
        .get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((response) => response.data)
        .then((data) => {
          setQuote(data[0])
        })
  }
    const sampleQuote = {
        image:"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FDuffman.png?1497567511709",
        quote:	"Oh Yeah!",
        character:"Ralph Wiggum",
    }

  const [ quote, setQuote] = useState(sampleQuote)


  return (
    <div className="App">
      <SimpsonQuotes quote={quote} />
      <button type="button" onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
