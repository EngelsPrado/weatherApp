import convert from 'convert-units'

import {CLOUDY,RAIN,DRIZZLE,THUNDER,SUN} from './const';

const getWeatherState= weather=>{
    
   const {id}=weather[0];

   switch (id) {

     case id<300: return THUNDER;
       
       break;
   
       case id<400: return DRIZZLE;
       
       break;

       case id<600: return RAIN;
       
       break;

       case id===800: return SUN
       
       break;

     default:  return CLOUDY;
     
       break;
   }


  }

   const getDesc = weather=>{

     const {description}=weather[0]

     return description;
   }

  const getTemp=temp=>{
    return  Number( convert(temp).from("K").to("C").toFixed(2));
  }

  //Funcion para obtener los datos del clima
   const transformWeather= weather_data=>{
     
     const {weather}=weather_data;
     const {temp,humidity}=weather_data.main;
     const { speed}=weather_data.wind;
     const weatherState =getWeatherState(weather);
     const desc=getDesc(weather);
     const data={
            temp:getTemp(temp),
            humedad:humidity,
            estado:weatherState,
            viento:speed,
            descripcion:desc
     }

     return data;
  }

  export default transformWeather;