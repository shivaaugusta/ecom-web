import { FunctionComponent } from "react";
import styles from "./Cart7.module.css";

export type Cart7Type = {
  className?: string;
};

const Cart7: FunctionComponent<Cart7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.imageTwo}>
          <img
            className={styles.zah9d56260021000000LightIcon}
            loading="lazy"
            alt=""
            src="/672462-zah9d-5626-002-100-0000-lightthenorthfacexguccicoat-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.productNameRowTwo}>
        <div className={styles.theNorthCoat}>The north coat</div>
        <div className={styles.tagsRowTwo}>
          <div className={styles.tagsTwo}>$260</div>
          <div className={styles.priceRowTwo}>$360</div>
        </div>
        <div className={styles.ratingRowTwo}>
          <div className={styles.fiveStar}>
            <img className={styles.filledStarSix} alt="" src="/star-one.svg" />
            <img
              className={styles.filledStarSeven}
              alt=""
              src="/star-one.svg"
            />
            <img
              className={styles.filledStarEight}
              alt=""
              src="/star-one.svg"
            />
            <img className={styles.filledStarNine} alt="" src="/star-one.svg" />
            <img className={styles.filledStarTen} alt="" src="/star-one.svg" />
          </div>
          <div className={styles.oldPriceRow}>(65)</div>
        </div>
      </div>
    </div>
  );
};

export default Cart7;
