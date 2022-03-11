
import { useState } from 'react';
import './App.css';
import MeteoAttualeCard from './components/MeteoAttualeCard';
import Previsioni from './components/Previsioni';

function App() {
  const [citta, setCitta] = useState('');
  const [meteoAttuale, setMeteoAttuale] = useState();
  const [previsioni, setPrevisioni] = useState();

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

  function previsioniFuture(nomeCitta) {
    //http://api.weatherapi.com/v1/current.json?key=f656a3e4a7054753873211018220803&q=London;
    fetch('http://api.weatherapi.com/v1/forecast.json?key='+key +'&q='+nomeCitta + '&days=5' )
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPrevisioni(data);
    });
    
  }

  


  return (
    <div className="App">
      <input type="text" name="" id="" onKeyDown={(key)=> {if(key.key === 'Enter' ){cercaCitta(citta); previsioniFuture(citta);}}} onChange={(ev)=>{
        setCitta(ev.target.value);
      }} />
      <button onClick={()=>{
        cercaCitta(citta);
        previsioniFuture(citta);
      }}>clicca</button>

      <MeteoAttualeCard meteoAttuale={meteoAttuale}/>

      <button onClick={()=> {
        previsioniFuture(citta);
        
      }}>dettagli</button>


      <Previsioni previsioni={previsioni} />
    

    </div>
    
  );
}

export default App;
