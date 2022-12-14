import React from 'react'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css"

const Navbar = ({config}) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
            <Image src={config.logo} width="100" height="100" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>
          TELEFON:
          </div>
          <div className={styles.text}>
           <a href={"tel:" + config.phoneNumber}>{config.phoneNumber}</a>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Essen bestellen</li>
          <li className={styles.listItem}>Tisch reservieren</li>
          <li className={styles.listItem}>Kontakt</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
        🛒
        <div className={styles.counter}>
          2
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar