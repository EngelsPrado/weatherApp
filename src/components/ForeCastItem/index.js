import React,{Component} from 'react';
import WeatherData from './../WeatherLocation/WeatherData'
import Menu from './../MenuDes'
import PropTypes from 'prop-types';
import './fore.css'
class ForecastItem extends Component{

       
    Menu=(weekDays,data)=>{

       switch (weekDays) {
           case 'lun.': return <Menu data={data} /> 
                        
               break;
       
           case 'mar.': return <Menu data={data} /> 
                        
               break;    
           default:  return <Menu data={data} /> 
               break;
       }
      

    }


    render(){
          
        const {weekDays,data,hour}=this.props;
    
        
        return (

            <div className="forecast">
                <h4>
               Dia: {weekDays} Hora: {hour}Hrs.
                </h4>
                
               {this.Menu(weekDays,data)}
                 
                 
            </div>


        )
    }
}

ForecastItem.propTypes={
data:PropTypes.shape({
    temp:PropTypes.number.isRequired,
    estado:PropTypes.string.isRequired,
    humedad:PropTypes.number.isRequired,
    descripcion:PropTypes.string.isRequired, 
    viento:PropTypes.number.isRequired
})
}
export default ForecastItem;