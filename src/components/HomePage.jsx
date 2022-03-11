import { useState } from "react";
import React from 'react';
import MeteoAttualeCard from './MeteoAttualeCard';
import Previsioni from './Previsioni';
import {useNavigate} from 'react-router-dom';
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";


function HomePage() {
    const [citta, setCitta] = useState('');
    const [meteoAttuale, setMeteoAttuale] = useState();
    

  let key = 'f656a3e4a7054753873211018220803';

  function cercaCitta(nomeCitta) {
    //http://api.weatherapi.com/v1/current.json?key=f656a3e4a7054753873211018220803&q=London;
    fetch('http://api.weatherapi.com/v1/current.json?key='+key +'&q='+nomeCitta)
    .then(response => response.json())
    .then(data => {
      console.log(data) 
      setMeteoAttuale(data);

    });
    
  }

  


  return (
      <div className="App">
        <input type="text" name="" id="" onKeyDown={(key)=> {if(key.key === 'Enter' ){cercaCitta(citta);}}} onChange={(ev)=>{
          setCitta(ev.target.value);
        }} />
        <button onClick={()=>{
          cercaCitta(citta);
        }}>clicca</button>

        <MeteoAttualeCard meteoAttuale={meteoAttuale}/>

        <Link to={'/dettagli/' + citta}>dettagli</Link>

        
      </div>
      
  );
}

export default HomePage;