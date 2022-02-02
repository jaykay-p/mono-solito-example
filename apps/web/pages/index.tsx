import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Link href="/screen-one">To Screen One</Link>
      <Link href="/screen-two">To Screen Two</Link>
    </div>
  );
};

export default Home;
