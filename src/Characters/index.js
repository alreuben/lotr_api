import 'bootstrap/dist/css/bootstrap.css';
import frodo from '../images/frodo2.webp';
import samwise from '../images/samwise.webp';
import pippin from '../images/pippin.jpg'
import merry from '../images/merry.webp'
import aragorn from '../images/aragorn.webp'
import gandalf from '../images/gandalf.webp'
import gimli from '../images/gimli.webp'
import legolas from '../images/Legolas.webp'

const Characters = ({ onClick }) => {
  const characters = [
    {
      id: '5cd99d4bde30eff6ebccfc15',
      name: 'Frodo Baggins',
      image: frodo,
    },

    {
      id: '5cd99d4bde30eff6ebccfd0d',
      name: 'Samwise Gamgee',
      image: samwise,
    },

    {
      id: '5cd99d4bde30eff6ebccfe7f',
      name: 'Peregrin Took',
      image: pippin,
    },

    {
      id: '5cd99d4bde30eff6ebccfe7b',
      name: 'Meriadoc Brandybuck',
      image: merry,
    },

    {
      id: '5cd99d4bde30eff6ebccfbe6',
      name: 'Aragorn II Elessar',
      image: aragorn,
    },

    {
      id: '5cd99d4bde30eff6ebccfea0',
      name: 'Gandalf',
      image: gandalf,
    },

    {
      id: '5cd99d4bde30eff6ebccfd23',
      name: 'Gimli',
      image: gimli,
    },

    {
      id: '5cd99d4bde30eff6ebccfd81',
      name: 'Legolas',
      image: legolas,
    }
  ]

  const DisplayCharacters = ({ character, characterQuote }) => {
    return (
      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
          <img src={character.image} style={{ width: '210px', height: '300px' }} className="card-img-top" alt={`Image of ${character.name}`} onClick={() => onClick(character)} />
          <div id='cardBody' className="card-body">
            <p className="card-text">{character.name}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row d-flex justify-content-center">
      {characters.map((character) => <DisplayCharacters character={character} key={character.id} />)}
    </div>
  )
}

export default Characters;