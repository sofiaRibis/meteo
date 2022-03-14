import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react'
import { BiTime } from 'react-icons/bi';
import DettagliOrari from './DettagliOrari';

const DettagliPrevisione = ({giorno}) => {

  return (
    <div className={(giorno.day.avgtemp_c > 20) ? 'dettagliPrevisioneContainer warm' : 'dettagliPrevisioneContainer'} onClick={(e)=>{
      let element = e.currentTarget.querySelector('.dettagliOrari')
      if (element.style.display == 'none'){  //Per qualche ragione la prima volta serve un doppio click, poi ne basta uno
        element.style.animation = 'fadeIn 0.5s';
        element.style.display = "block";
      }
      else {
        element.style.animation = 'fadeOut 0.5s'; //! Fade out non funziona
        element.style.display = "none";
      }
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
        <DettagliOrari ora={giorno.hour[12]}/>
        <DettagliOrari ora={giorno.hour[16]}/>
      </div>

      </div>
    </div>
  )
}

export default DettagliPrevisione;