import React from 'react';

const MeteoAttualeCard = ({meteoAttuale}) => {
  return (
    <div>
        {meteoAttuale.current.condition.text}
        <img src={meteoAttuale.current.condition.icon} alt="icon" />
        {meteoAttuale.current.temp_c + '° C'}
    </div>
  )
}

export default MeteoAttualeCard;