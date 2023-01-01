import styles from '../styles/Cart.module.css'
import React from 'react'
import Image from 'next/image'
import CartTotal from '../components/CartTotal'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [showPayPal, setShowPayPal] = useState(true);

  const amount = "2";
  const currency = "EUR";
  const style = {"layout": "vertical"};

  // https://paypal.github.io/react-paypal-js/?path=/docs/example-paypalbuttons--default
  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
    }, [currency, showSpinner]);


    return (<>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                    });
                }}
            />
        </>
    );
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <table className={styles.table}>
              <thead>
                  <tr className={styles.tr}>
                      <th>Produkt</th>
                      <th>Name</th>
                      <th>Extras</th>
                      <th>Preis</th>
                      <th>Anzahl</th>
                      <th style={{textAlign: "right"}}>Summe</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.products.map(product => (
                    <tr key={product._id}>
                      <td>
                        <div className={styles.imageContainer}>
                          <Image src="/img/logo.svg" alt="" fill style={{objectFit: "cover"}} />
                        </div>
                      </td>
                      <td>
                        <span className={styles.name}>{product.title}</span>
                      </td>
                      <td>
                        <span className={styles.extras}>
                          {
                            product.extras.map((extra) => (
                              <span key={extra._id}>{extra.text}</span>
                            ))
                          }
                        </span>
                      </td>
                      <td style={{textAlign: "center"}}>
                        <span className={styles.price}>{product.price} €</span>
                      </td>
                      <td style={{textAlign: "center"}}>
                        <span className={styles.quantity}>{product.quantity}</span>
                      </td>
                      <td style={{textAlign: "right"}}>
                        <span className={styles.total}>{product.price * product.quantity} €</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>

        <div className={styles.right}>
            <div className={styles.summary}>
                <h2 className={styles.title}>GESAMTPREIS</h2>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Zwischensumme:</b>{cart.total} €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Rabatt:</b>0 €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Lieferkosten:</b>0 €
                </div>
                <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Summe:</b>{cart.total} €
                </div>
                <button className={styles.button}>KOSTENPFLICHTIG BESTELLEN UND BAR BEZAHLEN</button>
                {showPayPal ? (<PayPalScriptProvider
                    options={{
                        "client-id": "test",
                        components: "buttons",
                        currency: "EUR"
                    }}
                >
                <ButtonWrapper
                        currency={currency}
                        showSpinner={false}
                    />
                </PayPalScriptProvider>) : (<></>)}
            </div>
            
            
        </div>
    </div>
  )
}

export default Cart