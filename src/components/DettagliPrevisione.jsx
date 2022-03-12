import React from 'react'
import { BiTime } from 'react-icons/bi';

const DettagliPrevisione = ({giorno}) => {
  return (
    //! questo invefce non funziona
    <div className={(typeof giorno !== 'undefined') ? ((giorno.day.avgtemp_c > 20) ? 'dettagliPrevisioneContainer warm' : 'dettagliPrevisioneContainer') : 'dettagliPrevisioneContainer'}>

      {/* 
      className={(typeof giorno !== 'dundefined) ? ((giorno.day.avgtemp_c > 20) ? 'dettagliPrevisioneContainer warm' : 'dettagliPrevisioneContainer') : 'dettagliPrevisioneContainer'}
      */}
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

      </div>

    </div>
  )
}

export default DettagliPrevisione;