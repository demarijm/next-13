import React from "react";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({ title }) {
  return <h6 className={styles.sectionHeader}>{title}</h6>;
}
