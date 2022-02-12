import React from "react";
import Navbar from "../../navigation/Navbar";
import styles from './styles.module.css';


export default function LandingPage({ children }) {
  return (
    <main>
      <Navbar />
      <section className={styles.content}>
        {children}
      </section>
    </main>
  );
};
