import styles from '../styles/DishList.module.css'
import React from 'react'
import DishCard from './DishCard'

const DishList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Unkreativ: HIER KÖNNTE IHRE WERBUNG STEHEN!</h1>
        <p className={styles.desc}>Ich weiß echt nicht, was ich hier so reinschreiben könnte außer Lorem ipsum.</p>
        <div className={styles.wrapper}>
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
            <DishCard img={"/img/logo.svg"} />
        </div>
    </div>
  )
}

export default DishList