import { FunctionComponent } from "react";
import styles from "./Cart4.module.css";

export type Cart4Type = {
  className?: string;
};

const Cart4: FunctionComponent<Cart4Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.productInfo}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.rdoexxtrl1Wrapper}>
          <img
            className={styles.rdoexxtrl1Icon}
            loading="lazy"
            alt=""
            src="/71rdoexxtrl-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.breedDryDogFoodParent}>
        <div className={styles.breedDryDog}>Breed Dry Dog Food</div>
        <div className={styles.productRating}>
          <div className={styles.innerStarsWrapper}>
            <div className={styles.innerStars}>$100</div>
          </div>
          <div className={styles.starCount}>
            <div className={styles.threeStar}>
              <img className={styles.starOneIcon} alt="" src="/star-one.svg" />
              <img className={styles.starTwoIcon} alt="" src="/star-one.svg" />
              <img
                className={styles.starThreeIcon}
                alt=""
                src="/star-one.svg"
              />
              <img className={styles.starFourIcon} alt="" src="/vector-9.svg" />
              <img className={styles.starFiveIcon} alt="" src="/vector-9.svg" />
            </div>
            <div className={styles.starLabel}>(35)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart4;
