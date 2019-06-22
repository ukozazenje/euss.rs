import React, { Component } from "react"
import { Link } from "gatsby"
import logo from '../images/logo.png'
import sr from '../images/rs.svg'

class Header extends Component{
  state ={
    show: false
  }

  render(){
    return(
      <nav className="">
        <div className="menu">
          <div id="mobile-menu" className="menu-icon-wrapper" onClick={()=> this.setState({show: !this.state.show})} >
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </div>
          
          <ul className="navigation container">
            <img className="logo-navigation" src={logo} alt="logo" />
            <li className={ this.state.show ? "open" : "" }><Link to="/en/home">Home</Link></li>
            <li className={ this.state.show ? "open" : "" }><Link to="/en/about-us">Company</Link></li>
            <li className={ this.state.show ? "open" : "" }><Link to="/"><img style={{height: "16px", verticalAlign: 'middle'}} src={sr} alt="serbian-language" /></Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}


export default Header
