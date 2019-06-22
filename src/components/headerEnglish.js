import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo.png'
import sr from '../images/rs.svg'

const Header = () => (
  <nav class="">
    <div class="menu">
      <div id="mobile-menu" class="menu-icon-wrapper" >
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </div>
      
      <ul class="navigation container">
        <Link to="/en/home"><img class="logo-navigation" src={logo} alt="logo" /></Link>
        <li><Link to="/en/home">Home</Link></li>
        <li><Link to="/en/about-us">Company</Link></li>
        <li><Link to="/"><img style={{height: "16px", verticalAlign: 'middle'}} src={sr} alt="serbian-language" /></Link></li>
      </ul>
    </div>
  </nav>
)

export default Header
