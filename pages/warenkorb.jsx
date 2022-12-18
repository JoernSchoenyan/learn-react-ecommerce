import styles from '../styles/Cart.module.css'
import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
              <thead>
                  <tr className={styles.tr}>
                      <th>Produkt</th>
                      <th>Name</th>
                      <th>Extras</th>
                      <th>Preis</th>
                      <th>Anzahl</th>
                      <th style={{textAlign: "right"}}>Summe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className={styles.imageContainer}>
                        <Image src="/img/logo.svg" alt="" fill objectFit="cover" />
                      </div>
                    </td>
                    <td>
                      <span className={styles.name}>Dönerpizza</span>
                    </td>
                    <td>
                      <span className={styles.extras}>Scharf</span>
                    </td>
                    <td style={{textAlign: "center"}}>
                      <span className={styles.price}>15 €</span>
                    </td>
                    <td style={{textAlign: "center"}}>
                      <span className={styles.quantity}>2</span>
                    </td>
                    <td style={{textAlign: "right"}}>
                      <span className={styles.total}>30 €</span>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>

        <div className={styles.right}>
            <div className={styles.wrapper}>
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
                <button className={styles.button}>KOSTENPFLICHTIG BESTELLEN</button>
            </div>
        </div>
    </div>
  )
}

export default Cart