import React from 'react';
import { BiMap } from 'react-icons/bi';


const MeteoAttualeCard = ({meteoAttuale}) => {
    if (!meteoAttuale) {
        return <div className='default'>enter city's name in the text field</div>
    }
  return (
    <div className='meteoAttualeCardContainer'>
      <div>
        <h2>{meteoAttuale.location.name}</h2>
        <h4> <BiMap className='icon map'/> {meteoAttuale.location.country} </h4>
      </div>

      <div>
        {meteoAttuale.current.condition.text}
      </div>

      <img src={meteoAttuale.current.condition.icon} alt="icon" />
      <div className='degrees'>
        {meteoAttuale.current.temp_c + '°C'}
      </div>
    </div>
  )
}

export default MeteoAttualeCard;