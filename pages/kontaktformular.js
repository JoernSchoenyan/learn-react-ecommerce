import styles from '../styles/kontaktformular.module.css'
import React from 'react'
import ContactForm from '../components/ContactForm'

const kontaktformular = () => {
  return (
    <div className={styles.container}><ContactForm /></div>
  )
}

export default kontaktformular