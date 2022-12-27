import styles from '../styles/DishCard.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const DishCard = ( {dish} ) => {
  return (
    <div className={styles.container}>
        <Link href={`/produkte/${dish.slug}`} passHref>
          <div style={{display: "flex", flexFlow: "row", gap: "25px"}}>
            <Image src="/img/logo.svg" alt="" width={200} height={200} />
            <div style={{display: "flex", flexFlow: "column"}}>
              <h1 className={styles.title}>{dish.title}</h1>
              <span className={styles.price}>{dish.prices[0]} €</span>
              <p className={styles.desc}>{dish.desc}</p>
            </div>
          </div>
        </Link>
    </div>
  )
}

export default DishCard