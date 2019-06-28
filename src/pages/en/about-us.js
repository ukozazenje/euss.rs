import React from "react"

import Layout from "../../components/layoutEnglish"
import SEO from "../../components/seo"
import oNamaImg from '../../images/o-firmi.png'

const Onama = () => (
  <Layout>
    <SEO title="About us" description="This relatively young company comes from family tradition,
based on family experience, which is passed on to the generations.
The company employs highly qualified specialists with
professional exam and licenses in the field of energy efficiency"/>
    <div className="about-us-hero">
      <div className="container">
        <div className="flex-row">
          <div className="flex-large">
            <h1 className="vertical-center">About company</h1>
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
          This relatively young company comes from family tradition,
based on family experience, which is passed on to the generations.
The company employs highly qualified specialists with
professional exam and licenses in the field of energy efficiency,
design, execution of thermo-technical and gas installations.
As individuals, who make up the team, we have a large number of designers behind
us facilities in the field of thermotechnics, gas technology, energy efficiency of
buildings, hot water and steam heating, industrial and comfortable ventilation, air
conditioning business premises, boiler rooms for liquid, gaseous and solid fuels.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default Onama
