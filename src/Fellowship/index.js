import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Characters from '../Characters';

const Fellowship = () => {
  const [quotes, setQuotes] = useState([]);
  const [characterQuote, setCharacterQuote] = useState([]);

  const [character, setCharacter] = useState([]);


  useEffect(() => {
    const headers = {
      'Accept': 'application/json',
      'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
    }

    const getQuotes = async () => {
      let data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote?limit=200', {
        headers: headers
      });
      let quotes = await data.json();
      let quoteData = quotes.docs;
      setQuotes(quoteData)
      // console.log(quoteData);
    }

    getQuotes();
  }, []);


  const handleClick = (character) => {
    const clickedCharacterQuotes = quotes.find(quote => quote.character === character.id);

    // Set the quotes for the selected character
    if (clickedCharacterQuotes) {
      setCharacterQuote(clickedCharacterQuotes.dialog)
      // Create paragraph element in card body showing quote
      const quoteParagraph = document.createElement("p")
      quoteParagraph.innerHTML = (characterQuote)
      document.getElementById('cardBody').appendChild(quoteParagraph);
    } else {
      setCharacterQuote(character.name + ' had no lines in this film...');
    }
    console.log(character.name + ': ' + characterQuote)
  }


















  return (
    <div>
      <h1 className="display-1 text-center py-5">Click on a Character</h1>
      <Characters onClick={handleClick} />
    </div>

  )
}

export default Fellowship;


// const handleClick = (character) => {
//   const characterQuotes = quotes.filter(quote => quote.character === character.id);

//   if (characterQuotes.length > 0) {
//     // Generate a random index for the quotes
//     const randomIndex = Math.floor(Math.random() * characterQuotes.length);
//     const randomQuote = characterQuotes[randomIndex].dialog;
//     setCharacterQuote(randomQuote);
//   } else {
//     setCharacterQuote(character.name + ' had no lines in this film...');
//   }

//   console.log(character.name + ': ' + characterQuote);
// }
