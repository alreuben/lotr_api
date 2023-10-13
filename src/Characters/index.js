import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import frodo from '../images/frodo.webp';
import samwise from '../images/samwise.webp';
import pippin from '../images/pippin.webp'
import merry from '../images/merry.webp'
import aragorn from '../images/aragorn.webp'
import gandalf from '../images/gandalf.webp'
import gimli from '../images/gimli.webp'
import legolas from '../images/Legolas.webp'

const Characters = () => {
  const characterFrodo = {
    characterID: '5cd99d4bde30eff6ebccfc15',
    name: 'Frodo Baggins'
  }

  const characterSamwise = {
    characterID: '5cd99d4bde30eff6ebccfd0d',
    name: 'Samwise Gamgee'
  }

  const characterPippin = {
    characterID: '5cd99d4bde30eff6ebccfe7f',
    name: 'Pippin Took'
  }

  const characterMerry = {
    characterID: '5cd99d4bde30eff6ebccfe7b',
    name: 'Merry Brandybuck'
  }

  const characterAragorn = {
    characterID: '5cd99d4bde30eff6ebccfbe6',
    name: 'Aragorn II Elessar'
  }

  const characterGandalf = {
    characterID: '5cd99d4bde30eff6ebccfea0',
    name: 'Gandalf'
  }

  const characterGimli = {
    characterID: '5cd99d4bde30eff6ebccfd23',
    name: 'Gimli'
  }

  const characterLegolas = {
    characterID: '5cd99d4bde30eff6ebccfd81',
    name: 'Legolas'
  }

  return (
    <>
    <div className="row d-flex justify-content-center">
      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{width: '18rem'}}>
          <img src={frodo} className="card-img-top" alt="image of Frodo Baggins" />
          <div className="card-body">
            <p className="card-text">{characterFrodo.name}</p>
            <p className="card-text characterQuote visually-hidden">{characterFrodo.quote}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{width: '18rem'}}>
          <img src={samwise} className="card-img-top " alt="image of Samwise Gamgee" />
          <div className="card-body">
            <p className="card-text">{characterSamwise.name}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{width: '18rem'}}>
          <img src={pippin} className="card-img-top" alt="image of Pippin Took" />
          <div className="card-body">
           <p className="card-text">{characterPippin.name}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{width: '18rem'}}>
          <img src={merry} className="card-img-top" alt="image of Merry Brandybuck" />
          <div className="card-body">
            <p className="card-text">{characterMerry.name}</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="row d-flex justify-content-center">
      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{ width: '18rem'}}>
          <img src={aragorn} className="card-img-top" alt="image of Aragorn II Elessar aka Strider" />
          <div className="card-body">
            <p className="card-text">{characterAragorn.name}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{ width: '18rem', height: '30rem' }}>
          <img src={gandalf} className="card-img-top" alt="image of Gandalf" />
          <div className="card-body">
            <p className="card-text">{characterGandalf.name}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{ width: '18rem' }}>
          <img src={gimli} className="card-img-top" alt="image of Gimli" />
          <div className="card-body">
            <p className="card-text">{characterGimli.name}</p>
          </div>
        </div>
      </div>

      <div className="col-sm-3">
        <div className="card border-0 mx-auto" style={{ width: '18rem', height: '30rem' }}>
          <img src={legolas} className="card-img-top" alt="image of Legolas" />
          <div className="card-body">
            <p className="card-text">{characterLegolas.name}</p>
          </div>
        </div> 
      </div>
    </div>
    </>
  )
}

export default Characters;
