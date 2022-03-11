import React, { useEffect } from 'react';
import DettagliPrevisione from './DettagliPrevisione';
import { useParams } from 'react-router-dom';
import { BiHome } from 'react-icons/bi';
import { Link } from "react-router-dom";
import { useState } from "react";



const NuovaPagina = () => {
    const params = useParams();
    const [previsioni, setPrevisioni] = useState();

    function previsioniFuture(nomeCitta) {
        let key = 'f656a3e4a7054753873211018220803';
        //http://api.weatherapi.com/v1/current.json?key=f656a3e4a7054753873211018220803&q=London;
        fetch('http://api.weatherapi.com/v1/forecast.json?key='+key +'&q='+nomeCitta+'&days=3' )
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPrevisioni(data);
        });
        
    }

    useEffect(()=>{
        previsioniFuture(params.citta);
    }, [])
    
      
    
    if(!previsioni) {
        return <div>loading</div>
    } else return (
        <div className='paginaNuovaContainer'>
            <div className='paginaNuovaHeader'>
                <Link className='link goHome' to="/">go back <BiHome className='icon home'/></Link>  
                <h2>Next days in {params.citta}</h2>
            </div>

            <div className='singleCardsContainer'>
                {previsioni.forecast.forecastday.map((element)=> {
                    return (
                        <>
                            
                        <DettagliPrevisione giorno={element}/>
                        </>
                    )
                })}

            </div>
        </div>

    )


    
        
        
    
}

export default NuovaPagina;