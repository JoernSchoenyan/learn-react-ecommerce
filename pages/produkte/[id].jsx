import styles from "../../styles/Product.module.css"
import React, { useState } from 'react'
import Image from "next/image"

const Product = () => {
  const [size, setSize] = useState(0)

  const dish = {
    id: 1,
    img: "/img/logo.svg",
    name: "Dönerpizza",
    price: [9.5, 12, 15],
    desc: "Lecker lecker Dönerpizza"
  };

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imageContainer}>
                <Image src={dish.img} alt="" fill objectFit="contain"/>
            </div>
        </div>
        <div className={styles.right}>
            <h2 className={styles.title}>{dish.name}</h2>
            <span className={styles.price}>{dish.price[size]} €</span>
            <p className={styles.desc}>{dish.desc}</p>

            <h3 className={styles.choose}>Wählen Sie die Größe Ihrer Pizza</h3>
            <div className={styles.sizes}>
                <div className={styles.size} onClick={() => setSize(0)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Klein (⌀ etwa 24cm)</span>
                </div>
                <div className={styles.size} onClick={() => setSize(1)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Mittel (⌀ etwa 28cm)</span>
                </div>
                <div className={styles.size} onClick={() => setSize(2)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Groß (⌀ etwa 40cm)</span>
                </div>
            </div>

            <h3 className={styles.choose}>Zusätzliche Zutaten</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className={styles.checkbox} />
                    <label htmlFor="double">Doppelt Fleisch</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="spicy" name="spicy" className={styles.checkbox} />
                    <label htmlFor="spicy">Scharf</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox} />
                    <label htmlFor="cheese">Extra viel Käse</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="garlic" name="garlic" className={styles.checkbox} />
                    <label htmlFor="garlic">Mit Knoblauch</label>
                </div>
            </div>

            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} min="1" />
                <button className={styles.button}>Zum Warenkorb hinzufügen</button>
            </div>
        </div>
    </div>
  )
}

export default Product