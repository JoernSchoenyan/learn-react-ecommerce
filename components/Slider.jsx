import React from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import { ChevronRight, ChevronLeft } from 'react-feather'

const Slider = () => {
  const images = [
    "/img/slider/pizzadesmonats.jpg",
    "/img/slider/specialdesmonats.jpg",
    "/img/slider/nachtischdesmonats.jpg",
  ]

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}}>
        <ChevronLeft />
      </div>
      
      <div className={styles.wrapper}>
        {images.map((img, i) => (
          <div className={styles.imageContainer}>
            <Image src={img} key={i} alt="" fill />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{right: 0}}>
        <ChevronRight />
      </div>
    </div>
  )
}

export default Slider