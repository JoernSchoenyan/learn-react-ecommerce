import styles from '../styles/CartTotal.module.css'
import React from 'react'

const CartTotal = ({checkoutButton}) => {
  return (
    <div className={styles.container}>
                <h2 className={styles.title}>GESAMTPREIS</h2>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Zwischensumme:</b>30€
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Rabatt:</b>0€
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Lieferkosten:</b>5€
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Summe:</b>35€
                </div>
                {checkoutButton 
                  ? <button className={styles.button}>KOSTENPFLICHTIG BESTELLEN</button>
                  : <button className={styles.button} disabled>BEZAHLT</button>}
            </div>
  )
}

export default CartTotal