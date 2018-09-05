import React,{Component} from 'react';
import PropTypes from 'prop-types';
import WeatherTemp from './WeatherTemp';
import WeatherInfo from './WeatherInfo';
import './style.css';





class WeatherData extends Component{

   render(){

      const {data}=this.props;
      
     // console.log(data);
      const{temp,humedad,estado,viento,descripcion}=data;
    
       return (
       <div className="container">
         

            <WeatherTemp temp={temp} estado={estado} description={descripcion}/>

           <WeatherInfo humedad={humedad} viento={viento}/>

        
        
       </div>
       )
   }

}

WeatherData.propTypes={

data:PropTypes.shape({
    temp:PropTypes.number.isRequired,
    estado:PropTypes.string.isRequired,
    humedad:PropTypes.number.isRequired,
    descripcion:PropTypes.string.isRequired, 
    viento:PropTypes.number.isRequired
}),

}

export default WeatherData;