import { Link } from "gatsby"
import React from "react"
import logo from '../images/logo.png'

const Header = ({ siteTitle }) => (
  // <header className="header">

  //   <div className="wrap">

  //     <h2 className="logo"><a href="#">Website Logo</a></h2>

  //     <a id="menu-icon">&#9776; Menu</a>

  //     <nav className="navbar">
  //       <ul className="menu">
  //       <li><a className="active" href="#">Home</a></li>
  //       <li><a href="#">About</a></li>
  //       <li><a href="#">Blog</a></li>
  //       <li><a href="#">Work</a></li>
  //       <li><a href="#">Contact</a></li>
  //       </ul>
  //     </nav>

  //   </div>
  // </header>
  <nav class="">
    <div class="menu">
      <div id="mobile-menu" class="menu-icon-wrapper" >
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
        <span class="menu-icon"></span>
      </div>
      
      <ul class="navigation container">
        <img class="logo-navigation" src={logo} alt="logo" />
        <li><Link to="/en/home">Home</Link></li>
        <li><Link to="/en/about-us">Company</Link></li>
        <li><Link to="/">RS</Link></li>
      </ul>
    </div>
  </nav>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
