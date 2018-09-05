import React, {Component} from 'react'
import PropTypes from 'prop-types';


class WeatherInfo extends Component{
 

    

 render(){

    const {humedad,viento}=this.props;
      
   
    
    return (

        <div className="humedad">
            
             <h3>Humedad { humedad + "%"} </h3>
             
              <h3>Vientos {viento + "m/s"}</h3>
         

        </div>

        
    )
 }

}

WeatherInfo.propTypes={
    humedad:PropTypes.number.isRequired,
  
};


export default WeatherInfo;