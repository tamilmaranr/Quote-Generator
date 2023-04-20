import React, { useState } from 'react';
import './QuoteGenerator.css';

const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
  { text: "The best way to predict your future is to create it.", author: "Abraham Lincoln" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: " Oscar Wilde" },
  { text: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
  { text: "Pain is inevitable. Suffering is optional.", author: " Haruki Murakami" },
  { text: "Be kind, for everyone you meet is fighting a hard battle.", author: " Plato" }
];

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return (
    
      <center>
        <div1 className="div1">
    <div className="quote-generator-container">
      <h1>Random Quote Generator</h1>
      <button onClick={generateQuote}>Generate Quote</button>
      {quote.text && (
        <div className="quote">
          <p>"{quote.text}"</p>
          <p>- {quote.author}</p>
        </div>
      )}
    </div>
    </div1>
      </center>
  );
};

export default QuoteGenerator;
