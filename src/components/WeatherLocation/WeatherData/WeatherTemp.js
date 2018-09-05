import React,{Component} from 'react';
import PropTypes from 'prop-types';



class WeatherTemp extends Component{

    render(){

        const {temp,estado,description}=this.props
     
            
        
        return (
          <div className="temp">
            <h3>  Temperatura</h3>
              {temp+"C"}   
            <i className= {"wi wi-"+estado}></i>
          
          <h4>{description}</h4>
          </div>       
            
        )
    }
}


WeatherTemp.propTypes={
    temp:PropTypes.number.isRequired,
    estado:PropTypes.string.isRequired,
}

export default WeatherTemp;