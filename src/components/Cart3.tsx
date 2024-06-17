import { FunctionComponent } from "react";
import styles from "./Cart3.module.css";

export type Cart3Type = {
  className?: string;
};

const Cart3: FunctionComponent<Cart3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.cart, className].join(" ")}>
      <div className={styles.cart1}>
        <div className={styles.cartChild} />
        <div className={styles.frameParent}>
          <div className={styles.fillHeartParent}>
            <img
              className={styles.fillHeartIcon}
              alt=""
              src="/fill-heart.svg"
            />
            <img className={styles.fillEyeIcon} alt="" src="/fill-eye.svg" />
          </div>
          <div className={styles.imageFill}>
            <img
              className={styles.eos250d03500x5001Icon}
              loading="lazy"
              alt=""
              src="/eos250d03500x500-1@2x.png"
            />
          </div>
        </div>
        <div className={styles.productItemCartAction}>
          <div className={styles.addToCart}>Add To Cart</div>
        </div>
      </div>
      <div className={styles.canonEosDslrCameraParent}>
        <div className={styles.canonEosDslr}>CANON EOS DSLR Camera</div>
        <div className={styles.frameGroup}>
          <div className={styles.wrapper}>
            <div className={styles.div}>$360</div>
          </div>
          <div className={styles.fourStarParent}>
            <div className={styles.fourStar}>
              <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
              <img className={styles.vectorIcon4} alt="" src="/vector-9.svg" />
            </div>
            <div className={styles.div1}>(95)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart3;
