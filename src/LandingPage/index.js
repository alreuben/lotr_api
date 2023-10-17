import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const LandingPage = () => {

  const [films, setFilms] = useState([])
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
      // console.log(filmData)
    }

    getFilms()

  }, [])

  return (
    <>
      <h1 className="display-1 text-center py-5">The Lord of the Rings Quote Generator</h1>
      <h2 className="display-2 text-center py-2">Choose a Film</h2>
      <div>
        <Link to={"/Fellowship"}><p className="text-center">The Fellowship of the Ring</p></Link>
        <p className="text-center">The Two Towers</p>
        <p className="text-center"> The Return of the King</p>
      </div>
    </>
  )
}

export default LandingPage;