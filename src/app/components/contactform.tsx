"use client"

import React from "react"
import styles from "./contactform.module.css"

export default function Contact() {
    return (
        <div className={styles.contactFormContainer}>
            <h1>Contact Us</h1>
            <p>If you have any questions, feel free to contact us!</p>
            <form className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className={styles.submitButton}>Send Message</button>
            </form>
            <div className={styles.contactInfo}>
                <h2>Other Ways to Contact Us</h2>
                <p>Email: <a href="mailto:ivan@pesic.com">ivan@pesic.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+381 60 1234567</a></p>
                <p>Address: Učitelj Tasina 20, Niš 18000, Serbia</p>
            </div>
        </div>
    )
}
