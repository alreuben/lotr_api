import { Link } from "react-router-dom";
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import logo from '../images/logo3.webp'
import Fellowship from "../Fellowship";

const LandingPage = () => {
  const [film, setFilm] = useState('no film')

  const movies = [
    {
      id: '5cd95395de30eff6ebccde5c',
      name: 'The Fellowship of the Ring',
    },

    {
      id: '5cd95395de30eff6ebccde5b',
      name: 'The Two Towers',
    },

    {
      id: '5cd95395de30eff6ebccde5d',
      name: 'The Return of the King',
    }
  ]

  const handleClick = (film) => {
    setFilm(film)
    console.log(film)
  }

  const DisplayMovies = ({movie}) => {
    return (
      <div>
        <Link to={"/Fellowship"} style={{textDecoration:'none'}}><h3 className="text-center pt-5 pb-3" onClick={() => handleClick(movie.id)}>{movie.name}</h3></Link>
      </div>
    )
  }
 
  return (
    <>
      <img src={logo} alt='lord of the rings logo' className="mx-auto d-block pt-5" />
      <h1 className="text-center">Quote Generator</h1>
      <h2 className="text-center pb-2">Choose a Film</h2>
      <div>
      {movies.map((movie) => <DisplayMovies movie={movie} key={movie.id} />)}
      </div>
      <Fellowship film={film}/>
    </>
  )
}

export default LandingPage;




// return (
//   <>
//   <img src={logo} className="mx-auto d-block pt-5"/>
//     <h1 className="text-center">Quote Generator</h1>
//     <h2 className="text-center pb-2">Choose a Film</h2>
//     <div>
//       <Link to={"/Fellowship"} style={{textDecoration: 'none'}}><h3 key={'5cd95395de30eff6ebccde5c'} className="text-center pt-5 pb-3 ">The Fellowship of the Ring</h3></Link>
//       <h3 className="text-center py-3">The Two Towers</h3>
//       <h3 className="text-center py-3 link-underline-opacity-0">The Return of the King</h3>
//     </div>
//   </>
// )