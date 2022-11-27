import React, { useState } from "react";
import styles from "./Gallery.module.scss";
import images from "../../data/images";

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  return (
    <div className={styles.galleryItemWrapper}>
      <div className={styles.galleryItem}>
        <div className={styles.galleryItemInfo}>
          <h1 className={styles.galleryInfoTitle}>{title}</h1>
          <h6 className={styles.galleryInfoSubtitle}>{subtitle}</h6>
          <p className={styles.galleryInfoCategory}>{category}</p>
        </div>
        <div
          className={styles.galleryItemImage}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default function Gallery({}) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className={styles.galleryWrap}>
      <div className={styles.gallery}>
        <div className={styles.galleryCounter}></div>
      </div>
      {images.map((image, index) => (
        <GalleryItem
          key={index}
          image={image.src}
          {...image}
          updateActiveImage={(index) => setActiveImage(index + 1)}
        />
      ))}
    </section>
  );
}
