import React from 'react'

const DettagliPrevisione = ({giorno}) => {
  return (
    <div>
        {giorno.date}
    
        <div>
        {giorno.day.condition.text}
        </div>
        <div>
        <img src={giorno.day.condition.icon} alt="" />
        </div>
        <div>
            {giorno.day.avgtemp_c}
        </div>
    </div>
  )
}

export default DettagliPrevisione