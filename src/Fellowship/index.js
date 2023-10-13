import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import frodo from '../images/frodo.jpg'
import sam from '../images/samwise.jpg'
import Characters from '../Characters';

const Fellowship = () => {
  const [quotes, setQuotes] = useState([]);
  const [characterQuote, setCharacterQuote] = useState('');
    
  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
    }

    const getQuotes = async () => {
      let data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote?limit=100', {
        headers: headers
      });
      let quotes = await data.json();
      let quoteData = quotes.docs;
      setQuotes(quoteData)
      console.log(quoteData);
    }
      
    getQuotes();
  }, []);


   
  // const handleClick = (characterID, characterQuote) => {
  //   setCharacterQuote(characterQuote);
  //   if (characterID === characterFrodo.characterID) {
  //     console.log('frodoooo');
  //   } else if (characterID === characterSamwise.characterID) {
  //     console.log('sam');
  //   }
  // }

  return (
    
    <div>
      <Characters />
    </div>
    
  )
}

export default Fellowship;
