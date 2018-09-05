import {SET_FORECAST_DATA} from './../Actions'


export const cities = (state={}, action)=>{
   
   switch (action.type) {
       case SET_FORECAST_DATA:
                               const {city,data}=action.value
                               
                               return {...state,[city]: {data} }
                              
           
           break;
   
       default:return state

           break;

    
   }
}


export const getForecastDataFromCities=(state,city)=> state[city] && state[city].data 