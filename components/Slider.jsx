import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import { ChevronRight, ChevronLeft } from 'react-feather'

const Slider = () => {
  const [index, setIndex] = useState(0)

  const images = [
    "/img/slider/pizzadesmonats.jpg",
    "/img/slider/specialdesmonats.jpg",
    "/img/slider/nachtischdesmonats.jpg",
  ]

  const handleArrow = (direction) => {
    if (direction === "l")
    {
      setIndex(index !== 0 ? index - 1 : 2)
    }
    
    if (direction === "r")
    {
      setIndex(index !== 2 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
        <ChevronLeft className={styles.arrows} size={48} />
      </div>
      
      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imageContainer}>
            <Image src={img} key={i} alt="" fill objectFit='contain' />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
        <ChevronRight className={styles.arrows} size={48} />
      </div>
    </div>
  )
}

export default Slider