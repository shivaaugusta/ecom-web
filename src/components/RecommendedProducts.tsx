import { FunctionComponent } from "react";
import FrameComponent4 from "./FrameComponent4";
import styles from "./RecommendedProducts.module.css";

export type RecommendedProductsType = {
  className?: string;
};

const RecommendedProducts: FunctionComponent<RecommendedProductsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.recommendedProducts, className].join(" ")}>
      <div className={styles.recommendationContainerParent}>
        <div className={styles.recommendationContainer}>
          <div className={styles.recommendationHeader}>
            <div className={styles.categoryRectangle}>
              <div className={styles.titleBackground} />
            </div>
            <div className={styles.justForYouWrapper}>
              <div className={styles.justForYou}>Just For You</div>
            </div>
          </div>
        </div>
        <button className={styles.button}>
          <div className={styles.viewAllProducts}>See All</div>
        </button>
      </div>
      <div className={styles.recommendedGrid}>
        <div className={styles.cart}>
          <div className={styles.cart1}>
            <div className={styles.recommendedBackground} />
            <div className={styles.recommendedDetails}>
              <div className={styles.discountPercent}>
                <div className={styles.recommendedNewTag}>-35%</div>
              </div>
              <div className={styles.recommendedBrand}>
                <img
                  className={styles.fillEyeIcon}
                  alt=""
                  src="/fill-eye.svg"
                />
                <div className={styles.recommendedBrandLogo}>
                  <img
                    className={styles.ideapadGaming3i01500x5001Icon}
                    loading="lazy"
                    alt=""
                    src="/ideapadgaming3i01500x500-11@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.recommendedAction}>
              <div className={styles.recommendedAddToCartContai}>
                <img className={styles.cart1Icon} alt="" src="/cart1.svg" />
                <div className={styles.recommendedAddToCartButton}>
                  <div className={styles.addToCart}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.recommendedNames}>
            <div className={styles.asusFhdGaming}>ASUS FHD Gaming Laptop</div>
            <div className={styles.recommendedPrices}>
              <div className={styles.empty}>$960</div>
              <div className={styles.empty1}>$1160</div>
            </div>
            <div className={styles.fiveStarParent}>
              <div className={styles.fiveStar}>
                <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
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
              <div className={styles.empty2}>(65)</div>
            </div>
          </div>
        </div>
        <div className={styles.cart2}>
          <div className={styles.cart3}>
            <div className={styles.cartChild} />
            <div className={styles.frameParent}>
              <div className={styles.fillEyeWrapper}>
                <img
                  className={styles.fillEyeIcon1}
                  alt=""
                  src="/fill-eye.svg"
                />
              </div>
              <div className={styles.g27cq4500x5001Wrapper}>
                <img
                  className={styles.g27cq4500x5001Icon}
                  loading="lazy"
                  alt=""
                  src="/g27cq4500x500-1@2x.png"
                />
              </div>
            </div>
            <div className={styles.cartInner}>
              <div className={styles.cart1Parent}>
                <img className={styles.cart1Icon1} alt="" src="/cart1.svg" />
                <div className={styles.addToCartWrapper}>
                  <div className={styles.addToCart1}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            iPSLCDGamingMonitor="IPS LCD Gaming Monitor"
            prop="$1160"
          />
        </div>
        <div className={styles.cart4}>
          <div className={styles.cart5}>
            <div className={styles.cartItem} />
            <div className={styles.newButtonParent}>
              <div className={styles.newButton}>
                <div className={styles.new}>NEW</div>
              </div>
              <div className={styles.fillEyeParent}>
                <img
                  className={styles.fillEyeIcon2}
                  alt=""
                  src="/fill-eye.svg"
                />
                <div className={styles.g922500x5001Wrapper}>
                  <img
                    className={styles.g922500x5001Icon}
                    loading="lazy"
                    alt=""
                    src="/g922500x500-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.cart1Group}>
                <img className={styles.cart1Icon2} alt="" src="/cart1.svg" />
                <div className={styles.addToCartContainer}>
                  <div className={styles.addToCart2}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            iPSLCDGamingMonitor="HAVIT HV-G92 Gamepad"
            prop="$560"
          />
        </div>
        <div className={styles.cart6}>
          <div className={styles.cart7}>
            <div className={styles.rectangleDiv} />
            <div className={styles.fillEyeContainer}>
              <img className={styles.fillEyeIcon3} alt="" src="/fill-eye.svg" />
            </div>
            <div className={styles.ak90001500x5001Wrapper}>
              <img
                className={styles.ak90001500x5001Icon}
                loading="lazy"
                alt=""
                src="/ak90001500x500-1@2x.png"
              />
            </div>
            <div className={styles.recommendedImage}>
              <div className={styles.recommendedImageContainer}>
                <img className={styles.cart1Icon3} alt="" src="/cart1.svg" />
                <div className={styles.recommendedImageOverlay}>
                  <div className={styles.addToCart3}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent4
            iPSLCDGamingMonitor="AK-900 Wired Keyboard"
            prop="$200"
          />
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;
