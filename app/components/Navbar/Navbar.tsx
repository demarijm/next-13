import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <p className={styles.navbar__menu__item}>Home</p>
      <p className={styles.navbar__menu__item}>About</p>
      <p className={styles.navbar__menu__item}>Contact</p>
    </div>
  );
}
