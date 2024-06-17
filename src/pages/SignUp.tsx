import { FunctionComponent } from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <section className={styles.main}>
        <Content />
        <Hero />
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
