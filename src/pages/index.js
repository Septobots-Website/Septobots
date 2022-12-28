import React from "react"
import Layout from "../components/Layout"
import MainInfo from "../components/MainInfo"
import MainPage from "../components/MainPage"
import SubPage from "../components/SubPage"
import styles from '../styles/global.css'

export default function Home() {
  return (
  <Layout>
  <MainInfo></MainInfo>
  <MainPage></MainPage>
  <SubPage></SubPage>
  </Layout>
    )
}
