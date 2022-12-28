import React from "react"
import Layout from "../components/Layout"
import MainInfo from "../components/MainInfo"
import MainPage from "../components/MainPage"
import ContactUs from "../components/ContactUs"
import styles from '../styles/global.css'

export default function Home() {
  return (
  <Layout>
  <MainInfo></MainInfo>
  <MainPage></MainPage>
  <ContactUs/>
  </Layout>
    )
}
