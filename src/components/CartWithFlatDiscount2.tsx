import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CartWithFlatDiscount2.module.css";

export type CartWithFlatDiscount2Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const CartWithFlatDiscount2: FunctionComponent<CartWithFlatDiscount2Type> = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const cartWithFlatDiscount1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.cartWithFlatDiscount, className].join(" ")}
      style={cartWithFlatDiscount1Style}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.discountPercentParent}>
          <div className={styles.discountPercent}>
            <div className={styles.div}>-35%</div>
          </div>
          <div className={styles.fillHeartParent}>
            <img
              className={styles.fillHeartIcon}
              alt=""
              src="/fill-heart.svg"
            />
            <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
            <div className={styles.eyeValue}>
              <img
                className={styles.ak90001500x5001Icon}
                alt=""
                src="/ak90001500x500-1@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.addToCartWrapper} style={frameDiv1Style}>
          <div className={styles.addToCart}>Add To Cart</div>
        </div>
      </div>
      <div className={styles.ak900WiredKeyboardParent} style={frameDiv2Style}>
        <div className={styles.ak900WiredKeyboard}>AK-900 Wired Keyboard</div>
        <div className={styles.parent}>
          <div className={styles.div1}>$960</div>
          <div className={styles.div2}>$1160</div>
        </div>
        <div className={styles.fourStarParent}>
          <div className={styles.fourStar}>
            <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
            <img className={styles.vectorIcon4} alt="" src="/vector-9.svg" />
          </div>
          <div className={styles.div3}>(75)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount2;
