
import transformForecast from './../services/transformForecast'


 export  const SET_CITY='SET_CITY';
 export const SET_FORECAST_DATA='SET_FORECAST_DATA'

//Este es un action

 const  setCity = value=>(

    { 
      type: SET_CITY,
      value
    } 

  )
//Este es otro Action
const key="9a5149308243af0009d9690f920b610e";

 const setForecastData=value=>(

   {
     type:SET_FORECAST_DATA,

     value
    }
  
  )

 // 
  export const setSelectedCity= value=>{//El value es la ciudad

    return dispatch=>{

      const api_weather=`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${key}`;

         //Activar la accion de busqueda 
         
         dispatch(setCity(value))

    return fetch(api_weather).then(

        data=> (data.json())

      ).then(

      weatherData=>{
        console.log(weatherData)
        const data = transformForecast(weatherData)
       
        
         //Accion que modifica el estado

         dispatch(setForecastData({city:value,data}))
       
      }
    )

    }
  }