import { FunctionComponent } from "react";
import styles from "./Cart6.module.css";

export type Cart6Type = {
  className?: string;
};

const Cart6: FunctionComponent<Cart6Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.c2st87460010820000LightGWrapper}>
          <img
            className={styles.c2st87460010820000LightGIcon}
            loading="lazy"
            alt=""
            src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.gucciDuffleBagParent}>
        <div className={styles.gucciDuffleBag}>Gucci duffle bag</div>
        <div className={styles.parent}>
          <div className={styles.div}>$960</div>
          <div className={styles.div1}>$1160</div>
        </div>
        <div className={styles.fourHalfStarParent}>
          <div className={styles.fourHalfStar}>
            <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
            <img
              className={styles.starHalfFilledIcon}
              alt=""
              src="/starhalffilled.svg"
            />
          </div>
          <div className={styles.div2}>(65)</div>
        </div>
      </div>
    </div>
  );
};

export default Cart6;
