import styles from '../styles/CartTotal.module.css'
import React from 'react'
import cartSlice from '../redux/cartSlice'

const CartTotal = ({checkoutButton, total}) => {
  return (
    <div className={styles.container}>
                <h2 className={styles.title}>GESAMTPREIS</h2>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Zwischensumme:</b>{total} €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Rabatt:</b>0 €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Lieferkosten:</b>0 €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Summe:</b>{total} €
                </div>
                {checkoutButton 
                  ? <button className={styles.button}>KOSTENPFLICHTIG BESTELLEN</button>
                  : <button className={styles.button} disabled>BEZAHLT</button>}
            </div>
  )
}

export default CartTotal