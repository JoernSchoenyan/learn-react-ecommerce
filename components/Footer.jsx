import styles from '../styles/Footer.module.css'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" alt="" fill style={{objectFit: "cover"}} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3>PLACEHOLDER</h3>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>UNSER RESTAURANT</h3>
          <p className={styles.text}>Musterstraße 123<br />38350 Helmstedt</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>ÖFFNUNGSZEITEN</h3>
          <p className={styles.text}>Nicht geöffnet.<br />Dies ist nur eine Demo.<br />Bestellungen werden nicht ausgeführt!</p>
        </div>
      </div>
    </div>
  )
}

export default Footer