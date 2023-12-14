import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useState} from 'react';
import { useParams } from "react-router-dom";
import LandingPage from './LandingPage';
import Film from './Film';


const App = () => {

  const [film, setFilm] = useState('')

//  function idURL() {
//     let { movie.id } = useParams();
//   }

    return (
      <div className="App">
         <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage film={film} setFilm={setFilm} />} />
                  <Route path="/Film" element={<Film film={film} setFilm={setFilm} />} />
              </Routes>
        </BrowserRouter>
      </div>
    )
}

export default App;