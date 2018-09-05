import React,{Component} from 'react';
import Location from './Location'
import WeatherData from './WeatherData';
import PropTypes from 'prop-types';
import transformWeather from './../../services/transformWeather'
import CircularProgress from 'material-ui/CircularProgress';
const key="9a5149308243af0009d9690f920b610e";





class WeatherLocation extends Component{

   constructor({city}){
     super();

     this.state={
       city,
       data:null
     }

   }


   
   componentWillMount() {
     this.handleUpdateClick();
   }

  //  componentDidMount() {
  //    console.log("Me ejecuto una vez luego del Render");
  //  }

  //  componentWillUpdate() {
  //    console.log("Me Actualizo antes del Render");
  //  }
   
  //  componentDidUpdate() {
  //   console.log("Me Actualizo despues del Render actualizado");
  // }
   
   
   handleUpdateClick=()=>{

    const {city}=this.state;
    const api_weather=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch(api_weather).then(data=>{
           
        
         //console.log(data);
         
         return data.json();
        
    }).then(weather_data => {
       // console.log(weather_data);
         
      const  data= transformWeather(weather_data);

       this.setState({data});
      
      

    });
   }

  render(){
    //console.log("Soy el Render");
    const {city,data}=this.state;  
    const {onWeatherLocationClick}=this.props;
   // const {city}=this.state;
     return(
      <div className="principal" onClick={onWeatherLocationClick}>
        
        <h1> <Location   city={city} />  </h1>
        
         <div >
              { data ? <WeatherData data={data}/> :<CircularProgress/> }

          </div>  

          
      </div>
        
               
       

     )
       
  }

}

WeatherLocation.propTypes={
  city:PropTypes.string.isRequired,
}

export default WeatherLocation;