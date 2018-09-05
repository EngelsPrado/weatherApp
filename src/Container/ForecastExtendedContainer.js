
import React, { Component } from 'react';
import {connect} from 'react-redux'
import ForecastExtended from './../components/ForecastExtended'
import PropTypes from 'prop-types';
import {getForecastDataFromCities,getCity} from './../reducer'
class ForecastExtendedContainer extends Component {
    render() {

        const {city,forecastData}=this.props
        return (
            city &&
            
            <div>
               
            <ForecastExtended city={city} forecastData={forecastData} />
            
            </div>
        );
    }
}

  ForecastExtendedContainer.propTypes = {
   city:PropTypes.string.isRequired,
   data:PropTypes.array,
  };

const mapStateProps= state=> ({city:getCity(state) ,forecastData: getForecastDataFromCities(state) })

export default connect(mapStateProps,null)(ForecastExtendedContainer)