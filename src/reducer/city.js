import {SET_CITY} from './../Actions'


export  const city =(state={}, action)=>{
    
const value=action.value

switch (action.type) {

    case SET_CITY:
                           
                     return value        
        break;
  
    default: return state  
    
}

      

}