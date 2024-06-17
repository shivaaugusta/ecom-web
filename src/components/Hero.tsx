import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.css";

export type HeroType = {
  className?: string;
};

const Hero: FunctionComponent<HeroType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogInTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.sideImage}>
        <img
          className={styles.dlbeatsnoop1Icon}
          loading="lazy"
          alt=""
          src="/dlbeatsnoop-1@2x.png"
        />
      </div>
      <div className={styles.signupForm}>
        <div className={styles.formContainer}>
          <div className={styles.formHeading}>
            <h1 className={styles.createAnAccount}>Create an account</h1>
            <div className={styles.enterYourDetails}>
              Enter your details below
            </div>
          </div>
          <form className={styles.inputFields}>
            <div className={styles.formFieldList}>
              <div className={styles.formFieldItems}>
                <div className={styles.name}>Name</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline-11.svg"
                />
              </div>
              <div className={styles.formFieldItems1}>
                <div className={styles.emailOrPhone}>Email or Phone Number</div>
                <img
                  className={styles.underlineIcon1}
                  alt=""
                  src="/underline-11.svg"
                />
              </div>
              <div className={styles.formFieldItems2}>
                <div className={styles.password}>Password</div>
                <img
                  className={styles.underlineIcon2}
                  alt=""
                  src="/underline-11.svg"
                />
              </div>
            </div>
            <div className={styles.formActions}>
              <button className={styles.button}>
                <div className={styles.viewAllProducts}>Create Account</div>
              </button>
              <div className={styles.socialLogin}>
                <button className={styles.googleSignUp}>
                  <div className={styles.googleLoginButton}>
                    <img
                      className={styles.iconGoogle}
                      alt=""
                      src="/icongoogle.svg"
                    />
                    <div className={styles.signUpWith}>Sign up with Google</div>
                  </div>
                </button>
                <div className={styles.loginOption}>
                  <div className={styles.alreadyHaveAccount}>
                    Already have account?
                  </div>
                  <div className={styles.loginLink}>
                    <div className={styles.logIn} onClick={onLogInTextClick}>
                      Log in
                    </div>
                    <img
                      className={styles.underlineIcon3}
                      alt=""
                      src="/underline-4.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
