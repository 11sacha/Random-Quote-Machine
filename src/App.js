import React, {useState, useEffect} from 'react';
import './App.css';
import colorArray from './colorsArray';

let quotesUrl = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

function App() {
  const [quote, setQuote] = useState("I have learned over the years that when one’s mind is made up, this diminishes fear.");
  const [author, setAuthor] = useState("Rosa Parks");
  const [randomNumber, setRandomNumber] = useState(0);
  const [quotesArray, setQoutesArray] = useState(null)
  const [machineColor, setMachineColor] = useState("#CCCC00")

  const getQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJson = await response.json()
    setQoutesArray(parsedJson.quotes)
  }

  useEffect(() => {
    getQuotes(quotesUrl)
  }, [quotesUrl])

  const getRandomQuote = () => {
    let randomInteger = Math.floor(Math.random() * quotesArray.length)
    setRandomNumber(randomInteger)
    setMachineColor(colorArray[randomInteger])
    setQuote(quotesArray[randomInteger].quote)
    setAuthor(quotesArray[randomInteger].author)
  }

  const quotesArr = [
    {quote: "I have learned over the years that when one’s mind is made up, this diminishes fear.", author: "Rosa Parks"},
    {quote: "Whatever the mind of man can conceive and believe, it can achieve.", author: "Napoleon Hill"},
    {quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford"}
  ]

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: machineColor}}>
        <div id="quote-box" style={{color: machineColor}}>
          <p id="text" style={{color: machineColor}}>
            "{quote}"
          </p>
          <p id="author" style={{color: machineColor}}><em> - {author}</em></p>
          <div className='button'>
            <a id="tweet-quote" style={{backgroundColor: machineColor}} href="https://twitter.com/home?lang=es" target='_blank' rel="noreferrer">Tweet</a>
          </div>
          <button id="new-quote" onClick={() => getRandomQuote()} style={{backgroundColor: machineColor}}>New Quote</button>
        </div>
      </header>
    </div>
  );
}

export default App;
