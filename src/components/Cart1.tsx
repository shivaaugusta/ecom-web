import { FunctionComponent } from "react";
import styles from "./Cart1.module.css";

export type Cart1Type = {
  className?: string;
};

const Cart1: FunctionComponent<Cart1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.arrivalInfo}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.newButton}>
          <div className={styles.new}>NEW</div>
        </div>
        <div className={styles.newMercedesBenzGtrLicensedWrapper}>
          <img
            className={styles.newMercedesBenzGtrLicensedIcon}
            loading="lazy"
            alt=""
            src="/newmercedesbenzgtrlicensedrideoncarkidselectrictoycar-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.kidsElectricCarParent}>
        <div className={styles.kidsElectricCar}>Kids Electric Car</div>
        <div className={styles.frameParent}>
          <div className={styles.arrivalInnerStarsWrapper}>
            <div className={styles.arrivalInnerStars}>$960</div>
          </div>
          <div className={styles.arrivalStarCount}>
            <div className={styles.fiveStar}>
              <img className={styles.newStarOne} alt="" src="/star-one.svg" />
              <img className={styles.newStarTwo} alt="" src="/star-one.svg" />
              <img className={styles.newStarThree} alt="" src="/star-one.svg" />
              <img className={styles.newStarFour} alt="" src="/star-one.svg" />
              <img className={styles.newStarFive} alt="" src="/star-one.svg" />
            </div>
            <div className={styles.newStarLabel}>(65)</div>
          </div>
        </div>
        <div className={styles.colourChnage}>
          <img
            className={styles.colourChnageChild}
            alt=""
            src="/group-1000005935.svg"
          />
          <div className={styles.arrivalColor} />
        </div>
      </div>
    </div>
  );
};

export default Cart1;
