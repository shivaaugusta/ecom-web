import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CartWithFlatDiscount1.module.css";

export type CartWithFlatDiscount1Type = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const CartWithFlatDiscount1: FunctionComponent<CartWithFlatDiscount1Type> = ({
  className = "",
  propPadding,
}) => {
  const starOneStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.cartWithFlatDiscount, className].join(" ")}>
      <div className={styles.discount}>
        <div className={styles.discountPercent}>
          <div className={styles.favorite}>-30%</div>
        </div>
        <div className={styles.preview}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.productPrice}>
          <img
            className={styles.g27cq4500x5001Icon}
            loading="lazy"
            alt=""
            src="/g27cq4500x500-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.starOne} style={starOneStyle}>
        <div className={styles.ipsLcdGaming}>IPS LCD Gaming Monitor</div>
        <div className={styles.starThree}>
          <div className={styles.starFour}>$370</div>
          <div className={styles.starHalf}>$400</div>
        </div>
        <div className={styles.price}>
          <div className={styles.fiveStar}>
            <img className={styles.discountIcon} alt="" src="/star-one.svg" />
            <img className={styles.percentIcon} alt="" src="/star-one.svg" />
            <img className={styles.favoriteIcon} alt="" src="/star-one.svg" />
            <img className={styles.previewIcon} alt="" src="/star-one.svg" />
            <img
              className={styles.productImageIcon}
              alt=""
              src="/star-one.svg"
            />
          </div>
          <div className={styles.productName}>(99)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount1;
