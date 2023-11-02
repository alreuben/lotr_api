import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import LandingPage from './LandingPage';
import Film from './Film';


const App = () => {

  const [film, setFilm] = useState('')

    return (
      <>
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage film={film} setFilm={setFilm} />} />
                  <Route path="/Film" element={<Film film={film} setFilm={setFilm} />} />
              </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;