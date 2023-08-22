import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import GetAllFilms from './GetAllFilms';
import ChooseFilm from './ChooseFilm';

const App = (films, setFilms, filmId, setFilmId) => {

  // const [films, setFilms] = useState([])
  // const [filmId, setFilmId] = useState()

    return (
      <>
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<GetAllFilms />}/>
                  {/* <Route path="/{film.name}" element={<ChooseFilm />}/> */}
                  <Route path="/ChooseFilm" element={<ChooseFilm />}/>
                 
              </Routes>
        </BrowserRouter>
       {/* <GetAllFilms films={films} setFilms={setFilms} /> */}
      <ChooseFilm films={films} setFilms={setFilms} filmId={filmId} setFilmId={setFilmId} />
  
      </>
    )
}

export default App;
