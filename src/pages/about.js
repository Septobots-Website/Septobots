import React from 'react'
import Layout from '../components/Layout'
import team from "../components/img/team.jpg"

export default function about() {
  return (
    <Layout>
        <section className="about">
          <div className="aboutMain">
            <h2>About The Septobots</h2>
            <p>The Septobots, FRC team 7777, seeks to innovate each year by approaching challenges in creative ways, 
              to iterate by consistently working to improve methods and strategies in all aspects of the team, 
              and to illustrate by having visible and measurable impact on our students as they are inspired by science and technology.
              We welcome ALL students in grades 9-12 from Greenfield High School.</p>
          </div>
        </section>

        <section className="ourPurpose">
        <div className="mission">
          <div className="missionPics">
            <img src={team} alt="team" />
          </div>
          <div className="missionStatement">
            <h1>Our Mission</h1>
            <p>The mission of FIRST is to inspire young people to be science and technology leaders and innovators, 
              by engaging them in exciting mentor-based programs that build science, engineering, 
              and technology skills, that inspire innovation, 
              and that foster well-rounded life capabilities including self-confidence, communication, and leadership.</p>
          </div>
        </div>

          <div className="ourGoals">
          <h1>Our Goals</h1>
          <p>Inspire members to further education and pursue careers in STEM fields 
          Help members understand what role engineering plays in improving the world and the progression of the human race
          Encourage members to pass on knowledge fostered on this team to family, friends, and members of the community to help better their lives
          Provide a team-oriented environment for students to work collaboratively in
          Teach students how to overcome obstacles and approach problems from different angles to find viable solutions
          Expose members of the community to STEM opportunities available in a supportive and diverse environment</p>
          </div>
        </section>

        <section className="ourTeam">
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
        </section>
        <section className="teamPicture">

        </section>

    </Layout>
  )
}
