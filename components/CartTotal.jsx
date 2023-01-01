import styles from '../styles/CartTotal.module.css'
import React from 'react'
import { useSelector } from 'react-redux'

const CartTotal = ({checkoutButton}) => {
  const cart = useSelector((state) => state.cart);

  return (
    <></>
  )
}

export default CartTotal