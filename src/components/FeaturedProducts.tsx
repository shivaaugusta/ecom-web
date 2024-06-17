import { FunctionComponent } from "react";
import CartWithFlatDiscount3 from "./CartWithFlatDiscount3";
import CartWithFlatDiscount2 from "./CartWithFlatDiscount2";
import CartWithFlatDiscount1 from "./CartWithFlatDiscount1";
import CartWithFlatDiscount from "./CartWithFlatDiscount";
import styles from "./FeaturedProducts.module.css";

export type FeaturedProductsType = {
  className?: string;
};

const FeaturedProducts: FunctionComponent<FeaturedProductsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featuredProducts, className].join(" ")}>
      <CartWithFlatDiscount3
        propFlex="unset"
        propMinWidth="unset"
        propWidth="270px"
        propPadding="0px var(--padding-xl) 0px 0px"
      />
      <CartWithFlatDiscount2
        propFlex="unset"
        propMinWidth="unset"
        propWidth="270px"
        propAlignSelf="unset"
        propPadding="0px var(--padding-xl) 0px 0px"
      />
      <CartWithFlatDiscount1 propPadding="0px var(--padding-xl) 0px 0px" />
      <CartWithFlatDiscount propPadding="0px var(--padding-xl) 0px 0px" />
      <div className={styles.cartWithFlatDiscount}>
        <div className={styles.discountPercentParent}>
          <div className={styles.discountPercent}>
            <div className={styles.div}>-25%</div>
          </div>
          <div className={styles.fillHeartParent}>
            <img
              className={styles.fillHeartIcon}
              alt=""
              src="/fill-heart.svg"
            />
            <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
          </div>
          <div className={styles.samMoghadamKhamsehKvmdstrgoWrapper}>
            <img
              className={styles.samMoghadamKhamsehKvmdstrgoIcon}
              alt=""
              src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.sSeriesComfortChairParent}>
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
    </div>
  );
};

export default FeaturedProducts;
