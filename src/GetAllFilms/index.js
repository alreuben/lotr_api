import {Link} from "react-router-dom";
import { useEffect, useState } from 'react'
import ChooseFilm from "../ChooseFilm";

const GetAllFilms = () => {

  const [films, setFilms] = useState([])
  const [filmId, setFilmId] = useState('')
  // const [filmName, setFilmName] = useState('')
    
    useEffect(() => {

        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer 36H_uSF2UL6WB97Foiob'
          }

        const getFilms = async () => {
            let data = await fetch('https://the-one-api.dev/v2/movie', {
              headers: headers
            })
            let films = await data.json()
            let filmData = films.docs 
            setFilms(filmData)
            // console.log(filmData) - returns array of all films
        }
        
        getFilms()
        
    }, [])
   
    const handleClick = (filmId) => {
      setFilmId(filmId)
      console.log('Film ID: ', filmId)
   }

    return (
      <>
      <h1>Choose a Film</h1>
        <div>
          {films.map((film) => (
           <Link to={"/ChooseFilm"}><p key={film._id} onClick={() => handleClick(film._id)}> {film.name}</p></Link>
           ))}
           {/* <ChooseFilm films={films} setFilms={setFilms} filmId={filmId} setFilmId={setFilmId} /> */}
         </div>
      </>
    )
}

export default GetAllFilms;
