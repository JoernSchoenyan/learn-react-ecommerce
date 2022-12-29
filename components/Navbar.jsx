import React from 'react'
import Image from 'next/image'
import styles from "../styles/Navbar.module.css"
import { ShoppingCart } from 'react-feather'
import Link from 'next/link'
import { useSelector } from 'react-redux'

const Navbar = ({config}) => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div>
            <Link href={"/"}>
              <Image src={config.logo} width="100" height="100" />
            </Link>
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
      <div className={styles.item} passHref>
        <Link href={"/warenkorb"}>
          <div className={styles.cart}>
            <ShoppingCart size="48" />
            <div className={styles.counter}>
              {quantity}
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar