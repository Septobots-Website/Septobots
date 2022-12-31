import React from 'react'
import Layout from '../components/Layout'
import team from "../components/img/team.jpg"

export default function about() {
  return (
    <Layout>
        <section className="about">
          <div className="aboutMain">
            <h2>About The Septobots</h2>
            <p>At The Septobots (FRC Team 7777), we are dedicated to fostering a culture of innovation, improvement, and inspiration among our students.
 We believe that through hands-on experiences in science and technology, our students can develop valuable skills and be motivated to make a positive impact in their community. 
              </p>
              <p>Our team is open to all students in grades 9-12 at Greenfield High School, and we encourage everyone to join us on this exciting journey of discovery and growth.</p>
          </div>
        </section>

        <section className="ourPurpose">
        <div className="mission">
          <div className="missionPics">
            <img src={team} alt="team" />
          </div>
          <div className="missionStatement">
            <h1>Our Mission</h1>
            <p>Similar to the goals of FIRST, our goal is to inspire the next generation of science and technology leaders and innovators.
 We believe that by engaging young people in mentor-based programs that focus on building science, engineering, and technology skills, we can empower them to pursue their passions and achieve their full potential. 
Our programs are designed to foster innovation, self-confidence, communication, and leadership, as well as a well-rounded understanding of the world around us. 
We are committed to helping young people discover their passion for STEM and make a positive impact in their communities.</p>
          </div>
        </div>
        </section>

        <section className="ourGoals">
          <h1>Our Goals</h1>
            <div className="goalContainer">
              <div className="goal-item item flex">
                <p>Encouraging our members to further their education and pursue careers in STEM fields, where they can make a difference and contribute to the advancement of humanity.</p>
              </div>
              <div className="goal-item item flex">
                <p>Helping our members understand the role that engineering and technology play in improving the world and the lives of people.</p>
              </div>
              <div className="goal-item item flex">
                <p>Sharing our knowledge and experiences with others, so that we can inspire and empower others to pursue their own passions and goals.</p>
              </div>
              <div className="goal-item item flex">
                <p>Providing a team-oriented environment where our students can work collaboratively and learn from one another.</p>
              </div>
              <div className="goal-item item flex">
                <p>Teaching our students how to overcome challenges and approach problems from different angles, so that they can develop innovative and effective solutions.</p>
              </div>
              <div className="goal-item item flex">
                <p>Exposing members of our community to the exciting opportunities that STEM fields have to offer, in a supportive and diverse environment.</p>
              </div>
          </div>
        </section>

        {/* <section className="ourTeam">
          <div className="ourAwards">
            <p>2019</p><p>Judges Award - Monterey Regional</p>
            <p>2019</p><p>Rookie of the Year - Offseason</p>
          </div>
          <div className="ourTeamsContainer">
            <div className="teamMembers">

            </div>
            <div className="respectiveRobot">
              <p>2019</p><p> - R.O.B.S.U.E. Act I</p>
              <p>2019</p><p> - R.O.B.S.U.E. Act II</p>
              <p>2020</p><p> - R.O.B.S.U.E. Act III</p>
              <p>2020</p><p> - R.O.B.S.U.E. Act IV</p>
              <p>2021</p><p> - R.O.B.S.U.E. Act IV</p>
              <p>2022</p><p> - Beanster Bot</p>
              <p>2022</p><p> - Beanster Bot</p>
              <p>2023</p><p> - R.O.B.S.U.E. Act V - The Last Act</p>
            </div>
          </div>
        </section> */}
        <section className="teamPicture">

        </section>

    </Layout>
  )
}
