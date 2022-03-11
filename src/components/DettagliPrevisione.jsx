import React from 'react'
import { BiTime } from 'react-icons/bi';

const DettagliPrevisione = ({giorno}) => {
  return (
    <div className='dettagliPrevisioneContainer'>
      

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
    </div>
  )
}

export default DettagliPrevisione;