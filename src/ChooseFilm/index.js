import { useEffect, useState } from 'react';
import GetAllFilms from '../GetAllFilms';

const ChooseFilm = (films, setFilms, filmId, setFilmId) => {

    let filmName = setFilms
    console.log(filmName)

    return (
      <>
        
            <h1>{setFilms.name}</h1>
            
      </>
    )
}

export default ChooseFilm;
