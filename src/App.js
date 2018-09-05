import React, { Component } from 'react';
//import logo from './logo.svg';
import Nav from './Nav'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationListContainer from './Container/LocationListContainer';
import   ForecastExtendedContainer from './Container/ForecastExtendedContainer'; 

  
//Components
const cities=["Managua","Jinotega","Bogota","Lisboa","Barcelona"];


class App extends Component {


   
  render() {

    return (
      <MuiThemeProvider>
        
         <Nav className="nav"/>

       <div className="App">

          <LocationListContainer city={cities} />  

          <div className="extendido">

            <ForecastExtendedContainer />

          </div>
       </div>

      

      </MuiThemeProvider>
    );
  }
}


export default App;