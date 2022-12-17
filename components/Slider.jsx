import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Slider.module.css'
import { ChevronRight, ChevronLeft } from 'react-feather'

const Slider = ({images}) => {
  const [index, setIndex] = useState(0)

  const handleArrow = (direction) => {
    if (direction === "l")
    {
      setIndex(index !== 0 ? index - 1 : images.length - 1)
    }
    
    if (direction === "r")
    {
      setIndex(index !== images.length - 1 ? index + 1 : 0)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{left: 0}} onClick={() => handleArrow("l")}>
        <ChevronLeft className={styles.arrows} size={64} />
      </div>
      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imageContainer}>
            <Image src={img} key={i} alt="" priority layout='fill' objectFit='contain'/>
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{right: 0}} onClick={() => handleArrow("r")}>
        <ChevronRight className={styles.arrows} size={64} />
      </div>
    </div>
  )
}

export default Slider