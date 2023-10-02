import {Link} from "react-router-dom";
import { useEffect, useState } from 'react'
import ChooseFilm from "../ChooseFilm";
import 'bootstrap/dist/css/bootstrap.css';

const GetAllFilms = () => {

  const [films, setFilms] = useState([])
  const [quotes, setQuotes] = useState([])
  const [filmId, setFilmId] = useState('')
  // const [filmName, setFilmName] = useState('')
    
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
          }

        const getFilms = async () => {
            let data = await fetch('https://the-one-api.dev/v2/movie?_id!=5cd95395de30eff6ebccde56,5cd95395de30eff6ebccde57', {
              headers: headers
            })
            let films = await data.json()
            let filmData = films.docs 
            setFilms(filmData)
            // - returns array of all films
            console.log(filmData)
        }
        
        getFilms()

        const getQuotes = async () => {
          let data = await fetch('https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote', {
            headers: headers
          })
          let quotes = await data.json()
          console.log(quotes)
          let quoteData = quotes.docs 
          setQuotes(quoteData)
          // - returns array of all films
          console.log(quoteData)
      }
      
      getQuotes()
        
    }, [])
   
    const handleClick = (filmId) => {
      setFilmId(filmId)
      console.log('Film ID: ', filmId)
   }

    return (
      <>
      <h1>Choose a Film</h1>
        <div className="filmBlock">
          {films.map((film) => (
          //  <Link to={"/ChooseFilm"}><p key={film._id} onClick={() => handleClick(film._id)}> {film.name}</p></Link>
          <p className="text-info" key={film._id} onClick={() => handleClick(film._id)}> {film.name}</p>
           ))}
           {/* <ChooseFilm films={films} setFilms={setFilms} filmId={filmId} setFilmId={setFilmId} /> */}
         </div>
      </>
    )
}

export default GetAllFilms;
