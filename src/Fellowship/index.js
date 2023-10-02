import {Link} from "react-router-dom";
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import frodo from '../images/frodo.jpg'

const Fellowship = () => {

  const [quotes, setQuotes] = useState([])
  const [characterID, setCharacterID] = useState('')
  const [characterQuote, setCharacterQuote] = useState('')
  // const [filmId, setFilmId] = useState('')
  // const [filmName, setFilmName] = useState('')
    
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
          }

        const getQuotes = async () => {
          let data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote?limit=100', {
            headers: headers
          })
          let quotes = await data.json()
          // console.log(quotes)
          let quoteData = quotes.docs 
          let characterQuoteID= quotes.character
          setQuotes(quoteData)
          // - returns array of all films
          console.log(quoteData)
      }
      
      getQuotes()
        
    }, [])


    const characterFrodo = {
      characterID: '5cd99d4bde30eff6ebccfc15',
      name: 'Frodo Baggins',  
      image: 'https://static.wikia.nocookie.net/lotr/images/3/32/Frodo_%28FotR%29.png/revision/latest?cb=20221006065757'
    }
   
    const handleClick = (characterFrodo, characterID, characterQuote) => {
      // setCharacterID(characterID)
      setCharacterQuote(characterQuote)
      if (characterFrodo.characterID == characterQuote){
        console.log('You clicked on frodo')
     
      }
   }


//    const handleClick = (filmId) => {
//     setFilmId(filmId)
//     console.log('Film ID: ', filmId)
//  }









   return (
   <img className="img-thumbnail" src={frodo} key={quotes.character} onClick={() => handleClick(quotes.character)} characterID='5cd99d4bde30eff6ebccfc15' characterQuoteID={quotes.character} />
   )

//     return (
//       <>
//       <h1>Choose a Film</h1>
//         <div className="filmBlock">
//           {films.map((film) => (
//           //  <Link to={"/ChooseFilm"}><p key={film._id} onClick={() => handleClick(film._id)}> {film.name}</p></Link>

//           <p className="text-info" key={film._id} onClick={() => handleClick(film._id)}> {film.name}</p>
//            ))}
//            {/* <ChooseFilm films={films} setFilms={setFilms} filmId={filmId} setFilmId={setFilmId} /> */}
//          </div>
//       </>
//     )
}

export default Fellowship;
