import React from 'react'
import styles from './page.module.css'
import ContactForm from '../components/contactform'

export default function Contact() {
  return (
    <div className={styles.contact}>
        <ContactForm />
    </div>
  )
}