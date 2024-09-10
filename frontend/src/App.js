// App.js (React)
import React, { useState, useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState({});

  const fetchQuote = async () => {
    const response = await fetch('http://localhost:5000/random-quote');
    const data = await response.json();
    setQuote(data);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <h1>Random Quote Generator</h1>
      <p>{quote.text}</p>
      <h4>- {quote.author}</h4>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
}

export default App;
