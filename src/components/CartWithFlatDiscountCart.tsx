import { FunctionComponent } from "react";
import styles from "./CartWithFlatDiscountCart.module.css";

export type CartWithFlatDiscountCartType = {
  className?: string;
};

const CartWithFlatDiscountCart: FunctionComponent<
  CartWithFlatDiscountCartType
> = ({ className = "" }) => {
  return (
    <div className={[styles.cartWithFlatDiscountCart, className].join(" ")}>
      <div className={styles.cart}>
        <div className={styles.discountedProductImageConta}>
          <img
            className={styles.curologyJ7pkvqrtusmUnsplashIcon}
            loading="lazy"
            alt=""
            src="/curologyj7pkvqrtusmunsplash-1@2x.png"
          />
        </div>
        <div className={styles.cartChild} />
        <div className={styles.curologyIcons}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
      </div>
      <div className={styles.curologyProductSetParent}>
        <div
          className={styles.curologyProductSet}
        >{`Curology Product Set `}</div>
        <div className={styles.curologyRating}>
          <div className={styles.ratingContent}>
            <div className={styles.ratingPlaceholder}>$500</div>
          </div>
          <div className={styles.fourStarParent}>
            <div className={styles.fourStar}>
              <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector-9.svg" />
            </div>
            <div className={styles.curologyLabel}>(145)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscountCart;
