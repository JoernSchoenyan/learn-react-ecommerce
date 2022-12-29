import styles from '../styles/Cart.module.css'
import React from 'react'
import Image from 'next/image'
import CartTotal from '../components/CartTotal'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

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
                  {cart.products.map(product => (
                    <tr key={product._id}>
                      <td>
                        <div className={styles.imageContainer}>
                          <Image src="/img/logo.svg" alt="" fill style={{objectFit: "cover"}} />
                        </div>
                      </td>
                      <td>
                        <span className={styles.name}>{product.title}</span>
                      </td>
                      <td>
                        <span className={styles.extras}>
                          {
                            product.extras.map((extra) => (
                              <span key={extra._id}>{extra.text}</span>
                            ))
                          }
                        </span>
                      </td>
                      <td style={{textAlign: "center"}}>
                        <span className={styles.price}>{product.price} €</span>
                      </td>
                      <td style={{textAlign: "center"}}>
                        <span className={styles.quantity}>{product.quantity}</span>
                      </td>
                      <td style={{textAlign: "right"}}>
                        <span className={styles.total}>{product.price * product.quantity} €</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>

        <div className={styles.right}>
            <CartTotal checkoutButton total={cart.total} />
        </div>
    </div>
  )
}

export default Cart