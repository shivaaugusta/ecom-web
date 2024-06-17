import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CartWithFlatDiscount.module.css";

export type CartWithFlatDiscountType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const CartWithFlatDiscount: FunctionComponent<CartWithFlatDiscountType> = ({
  className = "",
  propPadding,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={[styles.cartWithFlatDiscount, className].join(" ")}>
      <div className={styles.discountPercentParent}>
        <div className={styles.discountPercent}>
          <div className={styles.div}>-25%</div>
        </div>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.samMoghadamKhamsehKvmdstrgoWrapper}>
          <img
            className={styles.samMoghadamKhamsehKvmdstrgoIcon}
            loading="lazy"
            alt=""
            src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.sSeriesComfortChairParent} style={frameDiv3Style}>
        <div
          className={styles.sSeriesComfortChair}
        >{`S-Series Comfort Chair `}</div>
        <div className={styles.parent}>
          <div className={styles.div1}>$375</div>
          <div className={styles.div2}>$400</div>
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
          <div className={styles.div3}>(99)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount;
