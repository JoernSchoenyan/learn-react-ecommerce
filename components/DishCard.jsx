import styles from '../styles/DishCard.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DishCard = ( {dish} ) => {
  return (
    <div className={styles.container}>
        <Link href={`/produkte/${dish._id}`}>
          <Image src="" alt="" width={250} height={200} />
          <h1 className={styles.title}>{dish.title}</h1>
          <span className={styles.price}>{dish.prices[0]} €</span>
          <p className={styles.desc}>{dish.desc}</p>
        </Link>
    </div>
  )
}

export default DishCard