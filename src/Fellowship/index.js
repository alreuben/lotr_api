import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react'
import Characters from '../Characters';
import './styles.css'
import Nav from "../Nav";
import LandingPage from '../LandingPage';

const Fellowship = ({ film }) => {

  const [quotes, setQuotes] = useState([]);
  const [characterQuote, setCharacterQuote] = useState('');
  const [characterName, setCharacterName] = useState('');

  console.log(film)

  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
    }

    const getQuotes = async () => {
      let data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote', {
        headers: headers
      })
      let quotes = await data.json();
      let quoteData = quotes.docs;
      setQuotes(quoteData)
      // console.log(quoteData);
    }

    getQuotes();
  }, []);

  const handleClick = (character) => {
    const characterQuotes = quotes.filter((quote) => quote.character === character.id)

    if (characterQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * characterQuotes.length)
      const randomQuote = characterQuotes[randomIndex].dialog
      setCharacterQuote(randomQuote)
      setCharacterName(character.name)
      const characterQuotePara = document.getElementById('characterQuotePara')
      characterQuotePara.classList.remove('visually-hidden')
    } else {
      setCharacterQuote(character.name + ' had no lines in this film.')
      setCharacterName(character.name)
    }
  }

  return (
    <div style={{ backgroundColor: '#222315' }}>
      <Nav />
      <h1 className="display-1 text-center py-5">Click on a Character</h1>
      <Characters onClick={handleClick} characterQuote={characterQuote} />
      <div id='characterQuotePara' className="position-absolute top-50 start-50 translate-middle p-10 visually-hidden">
        <p id='paraName' className='text-center px-5'>{characterName}</p>
        <p id='paraQuote' className='text-center px-5'> {characterQuote} </p>
      </div>
    </div>
  )
}

export default Fellowship;