import Image from "next/image";
import About from "./components/About/About";
import Featured from "./components/Featured/Featured";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />
      <Header />
      <Featured />
      <About />
    </div>
  );
}
