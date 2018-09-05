import React,{Component} from 'react'
import WeatherData from './WeatherLocation/WeatherData'



class Menu extends Component{

  

  

    render(){

      const {data}=this.props
         
        return(


            <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               Estado del Clima 
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      
       <WeatherData data={data}/>
      
      </div>
    </div>
  </div>
</div>
        )
    }

}


export default Menu;