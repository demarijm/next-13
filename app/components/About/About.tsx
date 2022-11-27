import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import styles from "./About.module.scss";

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <SectionHeader title="About" />
      <p id="headline">
        Flirty flowers is a blog about flowers and floral designers who make
        them into art. Creativitgy and the art of &apos;making&apos; rewquire
        dialogue. The full prupose of the Flirty Flowers blog is to encourage
        and inspire. We value art, we value insight, and we value opinion.
      </p>
    </section>
  );
}
