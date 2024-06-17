import { FunctionComponent, useCallback } from "react";
import styles from "./Cart.module.css";

export type CartType = {
  className?: string;

  /** Action props */
  onCartContainerClick?: () => void;
};

const Cart: FunctionComponent<CartType> = ({
  className = "",
  onCartContainerClick,
}) => {
  const onCartContainerClick1 = useCallback(() => {
    // Please sync "Product Details page" to the project
  }, []);

  return (
    <div
      className={[styles.cart, className].join(" ")}
      onClick={onCartContainerClick}
    >
      <div className={styles.cart1}>
        <div className={styles.fillHeartParent}>
          <img className={styles.fillHeartIcon} alt="" src="/fill-heart.svg" />
          <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
        </div>
        <div className={styles.newButton}>
          <div className={styles.new}>NEW</div>
        </div>
        <div className={styles.gp11Prd31Wrapper}>
          <img
            className={styles.gp11Prd31Icon}
            loading="lazy"
            alt=""
            src="/gp11-prd3-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.gp11ShooterUsbGamepadParent}>
        <div className={styles.gp11ShooterUsb}>GP11 Shooter USB Gamepad</div>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <div className={styles.div}>$660</div>
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
            <div className={styles.div1}>(55)</div>
          </div>
        </div>
        <div className={styles.colourChnage}>
          <img
            className={styles.colourChnageChild}
            alt=""
            src="/group-1000005935-2.svg"
          />
          <div className={styles.colourChnageItem} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
