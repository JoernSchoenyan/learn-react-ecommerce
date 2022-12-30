import React, { useState } from 'react';
import styles from '../styles/ContactForm.module.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.veryspecialid) {
      console.log("Honeypot wurde ausgefüllt, nicht abschicken");
      return;
    }
    console.log("Honeypot wurde nicht ausgefüllt, abschicken");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form className={styles.contactForm} onSubmit={handleSubmit} onChange={handleChange}>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Deine Nachricht" />
        <div className={styles.specialID}>
          <span><input type="text" name="veryspecialid" /></span>
        </div>
        <button type="submit">Nachricht abschicken</button>
      </form>
    </div>
  );
};

export default ContactForm;