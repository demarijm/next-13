import React from "react";
import styles from "./Header.module.scss";
export default function Header() {
  return (
    <section className={styles.container}>
      <ul className={styles.headermenu}>
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text" className={styles.h1}>
        Art objects
      </h1>
    </section>
  );
}
