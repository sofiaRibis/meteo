import React from 'react';
import DettagliPrevisione from './DettagliPrevisione';

const Previsioni = ({previsioni}) => {
    console.log('ciao', previsioni);
    if(!previsioni) {
        return <div>loading</div>
    } else return (
        <>
        {previsioni.forecast.forecastday.map((element)=> {
            return (
                <>
                <DettagliPrevisione giorno={element}/>
                </>
            )
        })}
        </>

    )

    
    
}

export default Previsioni;