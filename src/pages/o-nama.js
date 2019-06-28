import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import oNamaImg from '../images/o-firmi.png'

const Onama = () => (
  <Layout>
    <SEO title="O nama" description="Ova relativno mlada firma potiče iz porodične tradicije, 
  zasnovana na porodičnom iskustvu, koje se prenosi generacijama.
  U firmi su zaposleni visoko kvalifikovani stručnjaci sa položenim
  stručnim ispitom i licencama iz oblasti energetske efikasnosti,
  projektovanja, izvođenja termotehničkih i gasnih instalacija." />
    <div className="about-us-hero">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <h1 className="vertical-center">O FIRMI</h1>
          </div>
        </div>
      </div>
    </div>
    <div className="container about-us-content">
      <div className="flex-row">
        <div className="flex-large">
          <img src={oNamaImg} alt="o nama" />
        </div>
        <div className="flex-large">
          <p>
              Ova relativno mlada firma potiče iz porodične tradicije, 
  zasnovana na porodičnom iskustvu, koje se prenosi generacijama.
  U firmi su zaposleni visoko kvalifikovani stručnjaci sa položenim
  stručnim ispitom i licencama iz oblasti energetske efikasnosti,
  projektovanja, izvođenja termotehničkih i gasnih instalacija.
  Kao pojedinci, koji čine tim, iza sebe imamo veliki broj projektovanih 
  objekata iz oblasti termotehnike, gasne tehnike,
  energetske efikasnosti zgrada, toplovodnog i parnog grejanja,
  industrijske i komforne ventilacije, klimatizacije poslovnih prostora,
  kotlarnice na tečno, gasovito i črvrsta goriva.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Onama
