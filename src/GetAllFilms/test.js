import { useEffect, useState } from 'react'

const GetAllFilms = (films, setFilms, filmId, setFilmId) => {

    // const [films, setFilms] = useState([])
    // const [filmId, setFilmId] = useState()
    
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
            console.log(filmData)
            // filmId = filmData._id
            // setFilmId(filmId)
            // console.log(filmData[]._id)
        }
        
        getFilms()
        
    }, [])

    return (
      <>
        <div>
          {films.map((film) => (<p key={film.id}>{film.name}</p>))}
          </div>
      </>
    )
}

export default GetAllFilms
