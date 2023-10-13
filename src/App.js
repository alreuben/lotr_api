import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Fellowship from './Fellowship';
import Characters from "./Characters";

const App = (films, setFilms, filmId, setFilmId) => {

  // const [films, setFilms] = useState([])
  // const [filmId, setFilmId] = useState()

    return (
      <>
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/Fellowship" element={<Fellowship />} />
                  <Route path="/Characters" element={<Characters />} />
                 
              </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
