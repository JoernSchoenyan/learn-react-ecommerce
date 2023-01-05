import styles from "../../styles/Product.module.css"
import React, { useState } from 'react'
import Image from "next/image"
import { useDispatch } from "react-redux"
import { addProduct } from "../../redux/cartSlice"
import dbConnect from "../../util/mongo"
import Product from "../../models/Product"

const ProductPage = ( {dish} ) => {
  const [price, setPrice] = useState(dish.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [extras, setExtras] = useState([]);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  }

  const handleSize = (sizeIndex) => {
    const difference = dish.prices[sizeIndex] - dish.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  }

  const handleOptions = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
        changePrice(option.price);
        setExtras((prev) => [...prev, option]);
    }
    else {
        changePrice(-option.price);
        setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...dish, extras, price, quantity}))
  }

  const selectedSizeClass = (index) => {
    if (index === size) {
        return [styles.size, styles.selectedSize].join(" ");
    }
    else {
        return styles.size;
    }
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imageContainer}>
                <Image src={dish.img} alt="" fill style={{objectFit: "contain"}}/>
            </div>
        </div>
        <div className={styles.right}>
            <h2 className={styles.title}>{dish.title}</h2>
            <span className={styles.price}>{price} €</span>
            <p className={styles.desc}>{dish.desc}</p>

            <h3 className={styles.choose}>Wählen Sie die Größe Ihrer Pizza:</h3>
            <div className={styles.sizes}>
                <div className={selectedSizeClass(0)} onClick={() => handleSize(0)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Klein (⌀ etwa 24cm)</span>
                </div>
                <div className={selectedSizeClass(1)} onClick={() => handleSize(1)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Mittel (⌀ etwa 28cm)</span>
                </div>
                <div className={selectedSizeClass(2)} onClick={() => handleSize(2)}>
                    <Image className={styles.sizeImage} src="/img/logo.svg" alt="" width={50} height={50} />
                    <span className={styles.number}>Groß (⌀ etwa 40cm)</span>
                </div>
            </div>

            <h3 className={styles.choose}>Zusätzliche Zutaten</h3>
            <div className={styles.ingredients}>
                {dish.extraOptions.map((option) =>(
                    <div className={styles.option} key={option._id}>
                        <input 
                            type="checkbox"
                            id={option.text}
                            name={option.text}
                            className={styles.checkbox}
                            onChange={(e) => handleOptions(e, option)}    
                        />
                        <label htmlFor={option.text}>{option.text}</label>
                    </div>
                ))}  
                
            </div>

            <div className={styles.add}>
                <input 
                    type="number" 
                    defaultValue={1} 
                    className={styles.quantity} 
                    min="1"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <button 
                    className={styles.button}
                    onClick={handleClick}>Zum Warenkorb hinzufügen
                </button>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async ( {params} ) => {
    await dbConnect();

    const product = await Product.findOne({slug: params.slug}).lean();

    return {
      props: {
        dish: JSON.parse(JSON.stringify(product))
      }
    }
  }

export default ProductPage