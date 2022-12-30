import React from 'react'
import Layout from '../components/Layout'
import ContactUs from '../components/ContactUs'
import appleLogo from "../components/img/appleLogo.png"

export default function sponsors() {
  return (
    <Layout>
      <section className="sponsors">
        <div className="sponsorsMain">
          <h2>Our Sponsors</h2>
          <p>The Septobots is funded by team membership fees, sponsor funding and in-kind donation. the team must pay registration fees, order cusotm-made parts, marketing materials, pay for travel, and other expenses</p>
          <p>Our participation in various competitions across the state is dependant on teh amount of funding we receiev each year. we thank our generous sponsors for all they provide</p>
          <button type="button" className="sponsorButton">Become a Sponsor</button>
        </div>
      </section>
      <section className="logos">
        <div className="logo">
          <img src={appleLogo} alt="appleLogo" />
        </div>
      </section>
      <ContactUs/>
    </Layout>
  )
}
