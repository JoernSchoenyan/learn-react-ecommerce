import styles from '../styles/DishCard.module.css'
import React from 'react'
import Image from 'next/image'

const DishCard = ({img}) => {
  return (
    <div className={styles.container}>
        <Image src={img} alt="" width={250} height={200} />
        <h1 className={styles.title}>Dönerpizza</h1>
        <span className={styles.price}>10,50 €</span>
        <p className={styles.desc}>Dicke Dönerpizza</p>
    </div>
  )
}

export default DishCard