
import { useState } from 'react';
import './App.css';
import MeteoAttualeCard from './components/MeteoAttualeCard';

function App() {
  const [citta, setCitta] = useState('');
  const [meteoAttuale, setMeteoAttuale] = useState('');


  function cercaCitta(nomeCitta) {
    let key = 'f656a3e4a7054753873211018220803';
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
      <input type="text" name="" id="" onChange={(ev)=>{
        setCitta(ev.target.value);
      }} />
      <button onClick={()=>{
        cercaCitta(citta);
      }}>clicca</button>

      
      <MeteoAttualeCard meteoAttuale={meteoAttuale}/>

    </div>
    
  );
}

export default App;
