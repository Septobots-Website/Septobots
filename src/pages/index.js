import React from "react"
import Layout from "../components/Layout"
import MainInfo from "../components/MainInfo"
import MainPage from "../components/MainPage"
import ContactUs from "../components/ContactUs"


export default function Home() {
  return (
  <Layout>
  <MainInfo></MainInfo>
  <MainPage></MainPage>
  <ContactUs/>
  </Layout>
    )
}
