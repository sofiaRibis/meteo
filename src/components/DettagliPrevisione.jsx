import React from 'react'
import { BiTime } from 'react-icons/bi';
import DettagliOrari from './DettagliOrari';

const DettagliPrevisione = ({giorno}) => {

  function showDettagliOrari(padre){
    var element = document.querySelector(padre +'.dettagliOrari')
    console.log(padre +'dettagliOrari')
    Array.from(element).forEach(item => {
      if (item.style.display === "none") {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  return (
    <div className={(giorno.day.avgtemp_c > 20) ? 'dettagliPrevisioneContainer warm' : 'dettagliPrevisioneContainer'} onClick={(e)=>{
      showDettagliOrari(e.target.tag)
    }}>

      <div className='shadow'>

      <div className='date'>
        <BiTime className='icon time'/> {giorno.date}
      </div>

      <div>
        {giorno.day.condition.text}
      </div>

      <div>
        <img src={giorno.day.condition.icon} alt="" />
      </div>

      <div className='degrees'>
        {giorno.day.avgtemp_c  + '°C'}
      </div>

      <div className='dettagliOrari'>
        <DettagliOrari ora={giorno.hour[0]}/>
        <DettagliOrari ora={giorno.hour[7]}/>
        <DettagliOrari ora={giorno.hour[11]}/>
        <DettagliOrari ora={giorno.hour[16]}/>
      </div>

      </div>
    </div>
  )
}

export default DettagliPrevisione;