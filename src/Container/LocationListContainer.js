

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import LocationList from './../components/locationList';
import {setSelectedCity} from './../Actions'



class LocationListContainer extends Component {

    handleSelectedLocation = city =>{
    
       this.props.setCity(city);
  
      }

    render() {
           const {city}=this.props 

        return (
            <LocationList city={city}
            onSelectedLocation={this.handleSelectedLocation}
            />  
        );
    }
}

LocationListContainer.propTypes = {
setCity:PropTypes.func.isRequired,
city:PropTypes.array.isRequired

};

const  mapDispatchToPropsActions=dispatch=>({
    setCity: value=>dispatch(setSelectedCity(value)) 
  })

  export default connect(null,mapDispatchToPropsActions)(LocationListContainer)
  

