import { FunctionComponent } from "react";
import styles from "./Body.module.css";

export type BodyType = {
  className?: string;
};

const Body: FunctionComponent<BodyType> = ({ className = "" }) => {
  return (
    <div className={[styles.body, className].join(" ")}>
      <div className={styles.sideImage}>
        <img
          className={styles.dlbeatsnoop1Icon}
          loading="lazy"
          alt=""
          src="/dlbeatsnoop-1@2x.png"
        />
      </div>
      <div className={styles.loginFormContainerWrapper}>
        <form className={styles.loginFormContainer}>
          <div className={styles.loginForm}>
            <div className={styles.loginDetails}>
              <h1 className={styles.logInTo}>Log in to Exclusive</h1>
              <div className={styles.enterYourDetails}>
                Enter your details below
              </div>
            </div>
            <div className={styles.inputFields}>
              <div className={styles.credentials}>
                <div className={styles.emailOrPhone}>Email or Phone Number</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline-11.svg"
                />
              </div>
              <div className={styles.credentials1}>
                <div className={styles.password}>Password</div>
                <img
                  className={styles.underlineIcon1}
                  alt=""
                  src="/underline-11.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.loginActions}>
            <button className={styles.loginButtonContainer}>
              <div className={styles.button}>
                <div className={styles.viewAllProducts}>Log In</div>
              </div>
            </button>
            <div className={styles.forgetPassword}>Forget Password?</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Body;
