import { FunctionComponent } from "react";
import styles from "./Cart2.module.css";

export type Cart2Type = {
  className?: string;
};

const Cart2: FunctionComponent<Cart2Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.ideapadGaming3i01500x5001Wrapper}>
          <img
            className={styles.ideapadGaming3i01500x5001Icon}
            loading="lazy"
            alt=""
            src="/ideapadgaming3i01500x500-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.asusFhdGamingLaptopParent}>
        <div className={styles.asusFhdGaming}>ASUS FHD Gaming Laptop</div>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>$700</div>
          </div>
          <div className={styles.fiveStarParent}>
            <div className={styles.fiveStar}>
              <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon4} alt="" src="/star-one.svg" />
            </div>
            <div className={styles.div1}>(325)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart2;
