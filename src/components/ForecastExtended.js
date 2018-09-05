import React  from 'react'
import ForecasItem from './ForeCastItem';
import PropTypes from 'prop-types';
      
    const ForecasDays= (forecastData)=>{

          return forecastData.map(forecast=>(

            <ForecasItem key={`${forecast.weekDay} 
            ${forecast.hour} `} 
            weekDays={forecast.weekDay} 
            hour={forecast.hour} 
             data={forecast.data} />
          ))

    }

    const renderProgress=()=>{
      return "Loading..."


    }

  
    
    const ForecastExtended=({city,forecastData})=>(

     

      <div className="justificar">
         <h2>Pronostico Extendido para {city}</h2>
      { forecastData ? ForecasDays(forecastData) : renderProgress() }

     </div>

    )

        
   ForecastExtended.propTypes={
     city:PropTypes.string.isRequired,
     forecastData:PropTypes.array,
   } 
    
 



export default ForecastExtended;