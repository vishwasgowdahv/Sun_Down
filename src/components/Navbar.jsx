import React from 'react'
import logo from '/assets/images/logo.svg'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
  <>
  <div className={styles.nav}>
    <img src={logo} alt="" />
    <div className={styles.menubar}>
        <h4>Work</h4>
        <h4>Studio</h4>
        <h4>Contact</h4>
    </div>
  </div>
  </>
  )
}
