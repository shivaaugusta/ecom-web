import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CartWithFlatDiscount3.module.css";

export type CartWithFlatDiscount3Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const CartWithFlatDiscount3: FunctionComponent<CartWithFlatDiscount3Type> = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
  propPadding,
}) => {
  const cartWithFlatDiscountStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.cartWithFlatDiscount, className].join(" ")}
      style={cartWithFlatDiscountStyle}
    >
      <div className={styles.discountContainers}>
        <div className={styles.discountPercent}>
          <div className={styles.div}>-40%</div>
        </div>
        <div className={styles.fillHeartParent}>
          <img
            className={styles.fillHeartIcon}
            loading="lazy"
            alt=""
            src="/fill-heart.svg"
          />
          <img
            className={styles.fillEyeIcon}
            loading="lazy"
            alt=""
            src="/fill-eye.svg"
          />
        </div>
        <div className={styles.g922500x5001Wrapper}>
          <img
            className={styles.g922500x5001Icon}
            loading="lazy"
            alt=""
            src="/g922500x500-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.havitHvG92GamepadParent} style={frameDivStyle}>
        <div className={styles.havitHvG92Gamepad}>HAVIT HV-G92 Gamepad</div>
        <div className={styles.parent}>
          <div className={styles.div1}>$120</div>
          <div className={styles.div2}>$160</div>
        </div>
        <div className={styles.fiveStarParent}>
          <div className={styles.fiveStar}>
            <img className={styles.starOneIcon} alt="" src="/star-one.svg" />
            <img className={styles.starTwoIcon} alt="" src="/star-one.svg" />
            <img className={styles.starThreeIcon} alt="" src="/star-one.svg" />
            <img className={styles.starFourIcon} alt="" src="/star-one.svg" />
            <img className={styles.starFiveIcon} alt="" src="/star-one.svg" />
          </div>
          <div className={styles.price}>(88)</div>
        </div>
      </div>
    </div>
  );
};

export default CartWithFlatDiscount3;
