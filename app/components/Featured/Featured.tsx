import React from "react";
import styles from "./Featured.module.scss";
import photos from "../../data/photos.js";

export default function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className={styles.featuredSection}>
      <div className={styles.featuredRowLayout}>
        <h6>green</h6>
        <img
          className={styles.firstImage}
          src={firstUrl}
          alt="featured image"
        />
      </div>
      <div className={styles.featuredColumnLayout}>
        <h6>lily</h6>
        <img
          className={styles.secondImage}
          src={secondUrl}
          alt="featured image"
        />
      </div>
    </section>
  );
}
