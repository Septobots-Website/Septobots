import React from "react"
import Layout from "../components/Layout"
import MainPage from "../components/MainPage"
import Youtube from "../components/Youtube"
import ContactUs from "../components/ContactUs"


export default function Home() {
  return (
  <Layout>
  <section className="mainInfo">
    <div className="paws"></div>
          <h1>The Septobots</h1>
          <p>FIRST Robotics Competition Team 7777</p>   
    <div className="paws"></div>
  </section>
  <MainPage/>
  {/* <Youtube/> */}
  <ContactUs/>
  </Layout>
    )
}
