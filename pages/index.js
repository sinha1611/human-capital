import React from 'react'
import MainBox from "../components/mainPage"
import Navigation from "../components/navigation"
import styles from "../styles/global.module.scss"

export default function index() {
  return (
    <>
      <Navigation />
      <MainBox />
    </>
  )
}

