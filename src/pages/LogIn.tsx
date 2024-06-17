import { FunctionComponent } from "react";
import Content1 from "../components/Content1";
import Body from "../components/Body";
import Footer from "../components/Footer";
import styles from "./LogIn.module.css";

const LogIn: FunctionComponent = () => {
  return (
    <div className={styles.logIn}>
      <section className={styles.main}>
        <Content1 />
        <Body />
      </section>
      <Footer />
    </div>
  );
};

export default LogIn;
