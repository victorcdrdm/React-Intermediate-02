import axios from 'axios';
import SimpsonQuotes from "./component/SimpsonQuotes";
import { useState } from "react";

import './App.css';

function App() {

  const getQuote = () => {
    axios
        .get('https://simpsons-quotes-api.herokuapp.com/quotes')
        .then((response) => response.data)
        .then((data) => setQuote(data[0]))
  };

  const [quote, setQuote] = useState(getQuote)

  return (
    <div className="App">
      <SimpsonQuotes quote{...quote} />
      <button type="button" onClick={getQuote}>Get employee</button>
    </div>
  );
}

export default App;
