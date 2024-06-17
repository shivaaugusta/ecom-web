import { FunctionComponent } from "react";
import ProductPrice from "./ProductPrice";
import FrameComponent2 from "./FrameComponent2";
import CategoryPhone from "./CategoryPhone";
import Cart7 from "./Cart7";
import Cart6 from "./Cart6";
import Cart5 from "./Cart5";
import styles from "./ProductContainer.module.css";

export type ProductContainerType = {
  className?: string;
};

const ProductContainer: FunctionComponent<ProductContainerType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.productContainer, className].join(" ")}>
      <ProductPrice
        propWidth="unset"
        propPadding="unset"
        propAlignSelf="stretch"
      />
      <div className={styles.categoryHeaderParent}>
        <div className={styles.categoryHeader}>
          <FrameComponent2 />
          <div className={styles.categoryList}>
            <div className={styles.categoryPhone}>
              <div className={styles.categoryContent}>
                <img
                  className={styles.categoryCellphoneIcon}
                  loading="lazy"
                  alt=""
                  src="/categorycellphone.svg"
                />
              </div>
              <div className={styles.phones}>Phones</div>
            </div>
            <div className={styles.categoryPhone1}>
              <div className={styles.categoryComputerWrapper}>
                <img
                  className={styles.categoryComputerIcon}
                  loading="lazy"
                  alt=""
                  src="/categorycomputer.svg"
                />
              </div>
              <div className={styles.computers}>Computers</div>
            </div>
            <CategoryPhone
              vector="pending_I163:2642;138:1655;138:1514"
              propMinWidth="167px"
            />
            <div className={styles.categoryPhone2}>
              <div className={styles.categoryCameraWrapper}>
                <img
                  className={styles.categoryCameraIcon}
                  loading="lazy"
                  alt=""
                  src="/categorycamera1.svg"
                />
              </div>
              <div className={styles.camera}>Camera</div>
            </div>
            <div className={styles.categoryPhone3}>
              <div className={styles.categoryHeadphoneWrapper}>
                <img
                  className={styles.categoryHeadphoneIcon}
                  loading="lazy"
                  alt=""
                  src="/categoryheadphone.svg"
                />
              </div>
              <div className={styles.headphones}>HeadPhones</div>
            </div>
            <div className={styles.categoryPhone4}>
              <div className={styles.categoryGamepadWrapper}>
                <img
                  className={styles.categoryGamepadIcon}
                  loading="lazy"
                  alt=""
                  src="/categorygamepad.svg"
                />
              </div>
              <div className={styles.gaming}>Gaming</div>
            </div>
          </div>
        </div>
        <div className={styles.computer} />
        <div className={styles.smartWatch}>
          <div className={styles.camera1}>
            <div className={styles.headphone}>
              <div className={styles.gamepad}>
                <div className={styles.gamepadInner}>
                  <div className={styles.instanceChild} />
                </div>
                <div className={styles.thisMonth}>This Month</div>
              </div>
              <h1 className={styles.bestSellingProducts}>
                Best Selling Products
              </h1>
            </div>
            <button className={styles.button}>
              <a className={styles.viewAllProducts}>View All</a>
            </button>
          </div>
          <div className={styles.bestSellingTitle}>
            <Cart7 />
            <Cart6 />
            <Cart5 />
            <div className={styles.cart}>
              <div className={styles.cart1}>
                <div className={styles.fillHeartParent}>
                  <img
                    className={styles.fillHeartIcon}
                    alt=""
                    src="/fill-heart.svg"
                  />
                  <img
                    className={styles.fillEyeIcon}
                    alt=""
                    src="/fill-eye.svg"
                  />
                </div>
                <div className={styles.samMoghadamKhamsehL7mqshlWrapper}>
                  <img
                    className={styles.samMoghadamKhamsehL7mqshlIcon}
                    loading="lazy"
                    alt=""
                    src="/sammoghadamkhamsehl-7mqshl-auunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.smallBookselfParent}>
                <div className={styles.smallBookself}>Small BookSelf</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>$360</div>
                </div>
                <div className={styles.fiveStarParent}>
                  <div className={styles.fiveStar}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/star-one.svg"
                    />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/star-one.svg"
                    />
                    <img
                      className={styles.vectorIcon2}
                      alt=""
                      src="/star-one.svg"
                    />
                    <img
                      className={styles.vectorIcon3}
                      alt=""
                      src="/star-one.svg"
                    />
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/star-one.svg"
                    />
                  </div>
                  <div className={styles.div1}>(65)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
