import { FunctionComponent } from "react";
import styles from "./Cart5.module.css";

export type Cart5Type = {
  className?: string;
};

const Cart5: FunctionComponent<Cart5Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.gammaxxL240Argb1500x5001Wrapper}>
          <img
            className={styles.gammaxxL240Argb1500x5001Icon}
            alt=""
            src="/gammaxxl240argb1500x500-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.rgbLiquidCpuCoolerParent}>
        <div className={styles.rgbLiquidCpu}>RGB liquid CPU Cooler</div>
        <div className={styles.parent}>
          <div className={styles.div}>$160</div>
          <div className={styles.div1}>$170</div>
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

export default Cart5;
