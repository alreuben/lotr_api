import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Fellowship from './Fellowship';


const App = (films, setFilms, filmId, setFilmId) => {

  // const [films, setFilms] = useState([])
  // const [filmId, setFilmId] = useState()

    return (
      <>
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/Fellowship" element={<Fellowship />} />
              </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
