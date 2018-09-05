import React, {Component} from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';


class LocationList extends Component{

    render(){

       const {city,onSelectedLocation}=this.props

       const handleWeatherLocationClick=city=>{
           console.log("handleWeatherLocation");
            onSelectedLocation(city);
       }

       const sendCities=city=>{
           return city.map((city)=> { 
            return  <WeatherLocation  key={city}  city={city}
              onWeatherLocationClick={()=>handleWeatherLocationClick(city)}/>
         })
       }

        return (
           
           <div className="locationList">
              <div>
              {sendCities(city)}
              </div>          
               
                 
           </div>
          
         
        )
    }

}

LocationList.propTypes={
    city:PropTypes.array.isRequired,
    onSelectedLocation:PropTypes.func,
}
export default LocationList;