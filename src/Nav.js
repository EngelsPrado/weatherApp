import React,{Component} from 'react'


class Nav extends Component{


  render(){

    return(


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">State</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse bg-light" id="navbarNav">
          <ul className="navbar-nav">
            <li className=" nav-item active">
              <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Api</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Nosotros</a>
            </li>
           
          </ul>
        </div>
      </nav>  
    )
  }

}

export default Nav;