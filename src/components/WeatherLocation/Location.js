import React,{Component} from 'react';
import PropTypes from 'prop-types';
class Location extends Component{
   

    render(){

        const {city} =this.props;

        return(
          
            <div>
                {city}
            </div>

        )
    }
}

Location.proptype={
    city:PropTypes.string.isRequired,
}

export default Location;