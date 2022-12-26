import styles from '../styles/Footer.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" alt="" fill style={{objectFit: "cover"}} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <div><h3>PLACEHOLDER</h3></div>
        </div>
        <div className={styles.card}>
          <div>
            <h3 className={styles.title}>UNSER RESTAURANT</h3>
            <p className={styles.text}>Musterstraße 123<br />38350 Helmstedt</p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <h3 className={styles.title}>ÖFFNUNGSZEITEN</h3>
            <p className={styles.text}>Nicht geöffnet.<br />Dies ist nur eine Demo.<br />Bestellungen werden nicht ausgeführt!</p>
          </div>
          
          <div className={styles.legalNotice}>
            <ul className={styles.legalLinks}>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer