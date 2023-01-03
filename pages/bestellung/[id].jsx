import styles from '../../styles/Order.module.css'
import React from 'react'
import Image from 'next/image'
import { File, CheckSquare, Map, Truck, Coffee } from 'react-feather'
import axios from 'axios'

const Order = ( {order} ) => {
  const status = order.status;
    
  const statusClass = (index) => {
    if (index - status < 1 ) return styles.done
    if (index - status === 1 ) return styles.inProgress
    if (index - status > 1 ) return styles.notDone
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <span>Bestellung #{order._id}</span>
          <div className={styles.row}>

            <div className={statusClass(0)}>
              <File size={36} strokeWidth={2.5} />
              <span>Bestellung</span>
              <div className={styles.checkedIcon}>
                <CheckSquare size={36} strokeWidth={2.5} color='green' />
              </div>
            </div>
            <div className={statusClass(1)}>
              <Coffee size={36} strokeWidth={2.5} />
              <span>Zubereitung</span>
              <div className={styles.checkedIcon}>
                <CheckSquare size={36} strokeWidth={2.5} color='green' />
              </div>
            </div>
            <div className={statusClass(2)}>
              <Map size={36} strokeWidth={2.5} />
              <span>Unterwegs</span>
              <div className={styles.checkedIcon}>
                <CheckSquare size={36} strokeWidth={2.5} color='green' />
              </div>
            </div>
            <div className={statusClass(3)}>
              <Truck size={36} strokeWidth={2.5} />
              <span>Auslieferung</span>
              <div className={styles.checkedIcon}>
                <CheckSquare size={36} strokeWidth={2.5} color='green' />
              </div>
            </div>
          </div>
          <span>Die Bestellung enthält:</span>
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
            <div className={styles.orderDetails}>
              <span>{order.customer}</span>
              <span>{order.address}</span>
              <span>{order.total}</span>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);

  return {
    props: { order: res.data }
  }
}

export default Order