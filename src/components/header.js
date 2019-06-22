import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo.png'
import en from '../images/gb.svg'

const Header = () => (
  <nav class="">
    <div class="menu">
      <div id="mobile-menu" class="menu-icon-wrapper" >
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </div>
      
      <ul class="navigation container">
        <Link to="/"><img class="logo-navigation" src={logo} alt="logo" /></Link>
        <li><Link to="/">Početna</Link></li>
        <li><Link to="/o-nama">O firmi</Link></li>
        <li><Link to="/en/home"><img style={{height: "16px", verticalAlign: 'middle'}} src={en} alt="logo" /></Link></li>
      </ul>
    </div>
  </nav>
)

export default Header
