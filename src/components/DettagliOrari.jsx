import React from 'react'
import './DettagliOrari.css'

const DettagliOrari = ({ora}) => {
    return(
    <div className='orariFlex'>
        <div className='orario'>{(ora.time).substring(11)}</div>
        <img src={ora.condition.icon} alt="" />
        <div className='testiUlteriori'>
            <div>{ora.condition.text}</div>
            <div>{ora.temp_c +'°C'}</div> 
        </div>
    </div>
    
    )
}
export default DettagliOrari;