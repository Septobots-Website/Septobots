import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/global.css'

export default function Home() {
  return (
  <Layout>
     
    <section className="mainInfo">
    <div className="paws"></div>
      <div className="mainInfoText">
          <h1>The Septobots</h1>
          <h4>First Robotics Competition Team 7777</h4>  
      </div>    
    <div className="paws"></div>
    </section>

    <div className="mainPage">
      <div className="left" >
        <h4>Current Events</h4>
        <p>Some text..</p>
      </div>

      <div className="center" >
        <section className="weAre">
          <h2>Come along and CHARGE FORWARD</h2>
          <p>We are FRC Team #7777, The Septobots, a non-profit community First Robotics Competition team of high-school students from the Heart of The Salinas Valley</p>
          <br/>
          <p>As students at Greenfield High School, we are committed to building a brighter future for ourselves and our community. 
            One way we have chosen to do this is by participating in the FIRST Robotics Competition (FRC). 
            Through this program, we have gained valuable knowledge and skills in robotics, as well as the opportunity to work collaboratively towards a shared goal. 
            In addition to the technical skills and teamwork that we have developed through FRC, we have also learned the importance of perseverance and problem-solving. 
            The challenges that we have faced during the competition have taught us to approach problems with a positive attitude and to never give up. 
            These are valuable lessons that we can carry with us beyond our time in FRC and into our future careers and personal lives
            We are grateful for the chance to be a part of such a meaningful and enriching experience.</p>
          <br/>
          <button type="button"> Learn more about our team </button>
        </section>
      </div>

      <div className="right" >
        <h4>Current Sponsors</h4>
        <p>Some text..</p>
      </div>
    </div>

    <div className="subPage">
    <section className="joinUs">
          <h2>Join us and Support us</h2>
        </section>

        <section className="contactUs">
          <h1>Contact Us</h1>
          <div className="addy">
            <p>Greenfield High School</p>
            <p>205 S. El Camino Real</p>
          </div>
          <div className="mssg">
            <form method="post" action="https://getform.io/{}">
              <label>
                Full Name
                <input type="text" name="name"/>
              </label>
              <label>
                Phone Number
                <input type="text" name="number"/>
              </label>
              <label>
                Email
                <input type="email" name="email"/>
              </label>
              <label>
                Message
                <input type="text"  name="message"/>
              </label>
            </form>
          </div>
        </section>
    </div>
  </Layout>
    )
}
