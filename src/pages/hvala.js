import React from "react"

import Header from "../components/header"
import SEO from "../components/seo"
import correct from '../images/correct.svg'

const HvalaNaInteresovanju = () => (

  <>
    <Header />
    <div style={{height: '85vh'}}>
    <SEO title="Hvala na interesovanju" />
      <div style={{background: '#2980b9',textAlign: 'center'}}>
        <div className="container">
          <div className="flex-row">
            <div className="flex-large">
              <img style={{height: '6rem', marginTop: '5rem'}} src={correct} alt="correct" />
              <h1 style={{color: '#fff', fontSize: "3rem", marginBottom: '5rem'}}>HVALA NA INTERESOVANJU</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer style={{padding: '0', margin: "0"}}>
      <div className="copy-right">
        <div className="flex-large">
            <p>&copy; EUROPEAN SMART SOLUTIONS</p>
        </div>
      </div>
    </footer>
  </>
)

export default HvalaNaInteresovanju
