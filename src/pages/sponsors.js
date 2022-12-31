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
          <p>As a student-led organization, The Septobots rely on a combination of sponsor funding and in-kind donations to support our operations and activities. 
            These funds help us cover a range of expenses, including registration fees, custom-made parts, marketing materials, travel, and other necessary costs.</p>
          <p>Our ability to participate in various robotics competitions across the state is greatly dependent on the level of funding we receive each year. 
            We are grateful to our generous sponsors for their support, which enables us to continue our mission of inspiring and empowering the next generation of science and technology leaders and innovators. 
            Without their help, we would not be able to achieve all that we have.</p>
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
