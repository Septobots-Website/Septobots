import React from 'react'

export default function mainPage() {
  return (
    <div className="mainPage">
      <div className="left" >
        <h4>Current Events</h4>
        <p>Some text..</p>
      </div>

      <div className="center" >
        <section className="weAre">
          <h2>Come along and CHARGE FORWARD</h2>
          <p>We are FRC Team #7777, The Septobots, a non-profit community FIRST Robotics Competition team of high-school students from the Heart of The Salinas Valley</p>
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
  )
}
