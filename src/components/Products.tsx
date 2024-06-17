import { FunctionComponent } from "react";
import styles from "./Products.module.css";

export type ProductsType = {
  className?: string;
};

const Products: FunctionComponent<ProductsType> = ({ className = "" }) => {
  return (
    <div className={[styles.products, className].join(" ")}>
      <div className={styles.wishlistProducts}>
        <div className={styles.wishlist4Wrapper}>
          <div className={styles.wishlist4}>Wishlist (4)</div>
        </div>
        <button className={styles.button}>
          <div className={styles.viewAllProducts}>Move All To Bag</div>
        </button>
      </div>
      <div className={styles.productGrid}>
        <div className={styles.cart}>
          <div className={styles.cart1}>
            <div className={styles.productBackground} />
            <div className={styles.productDetails}>
              <div className={styles.discountPercent}>
                <div className={styles.newTag}>-35%</div>
              </div>
              <div className={styles.productBrand}>
                <img
                  className={styles.fillEyeIcon}
                  loading="lazy"
                  alt=""
                  src="/fill-eye1.svg"
                />
                <div className={styles.brandLogo}>
                  <img
                    className={styles.c2st87460010820000LightGIcon}
                    loading="lazy"
                    alt=""
                    src="/547953-9c2st-8746-001-082-0000-lightguccisavoymediumdufflebag-1@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.productAction}>
              <div className={styles.addToCartContainer}>
                <img
                  className={styles.cart1Icon}
                  loading="lazy"
                  alt=""
                  src="/cart1.svg"
                />
                <div className={styles.addToCartButton}>
                  <div className={styles.addToCart}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productNames}>
            <div className={styles.gucciDuffleBag}>Gucci duffle bag</div>
            <div className={styles.productPrices}>
              <div className={styles.oldPrice}>$960</div>
              <div className={styles.discountedPrice}>$1160</div>
            </div>
          </div>
        </div>
        <div className={styles.cart2}>
          <div className={styles.cart3}>
            <div className={styles.cartChild} />
            <div className={styles.fillEyeWrapper}>
              <img
                className={styles.fillEyeIcon1}
                alt=""
                src="/fill-eye1.svg"
              />
            </div>
            <div className={styles.gammaxxL240Argb1500x5001Wrapper}>
              <img
                className={styles.gammaxxL240Argb1500x5001Icon}
                loading="lazy"
                alt=""
                src="/gammaxxl240argb1500x500-1@2x.png"
              />
            </div>
            <div className={styles.productImage}>
              <div className={styles.imageContainer}>
                <img className={styles.cart1Icon1} alt="" src="/cart1.svg" />
                <div className={styles.imageOverlay}>
                  <div className={styles.addToCart1}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rgbLiquidCpuCoolerParent}>
            <div className={styles.rgbLiquidCpu}>RGB liquid CPU Cooler</div>
            <div className={styles.wrapper}>
              <div className={styles.div}>$1960</div>
            </div>
          </div>
        </div>
        <div className={styles.cart4}>
          <div className={styles.cart5}>
            <div className={styles.cartItem} />
            <div className={styles.frameParent}>
              <div className={styles.fillEyeContainer}>
                <img
                  className={styles.fillEyeIcon2}
                  alt=""
                  src="/fill-eye1.svg"
                />
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
            <div className={styles.cartInner}>
              <div className={styles.cart1Parent}>
                <img className={styles.cart1Icon2} alt="" src="/cart1.svg" />
                <div className={styles.addToCartWrapper}>
                  <div className={styles.addToCart2}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gp11ShooterUsbGamepadParent}>
            <div className={styles.gp11ShooterUsb}>
              GP11 Shooter USB Gamepad
            </div>
            <div className={styles.container}>
              <div className={styles.div1}>$550</div>
            </div>
          </div>
        </div>
        <div className={styles.cart6}>
          <div className={styles.cart7}>
            <div className={styles.rectangleDiv} />
            <div className={styles.frameGroup}>
              <div className={styles.fillEyeFrame}>
                <img
                  className={styles.fillEyeIcon3}
                  alt=""
                  src="/fill-eye1.svg"
                />
              </div>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-608@2x.png"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.cart1Group}>
                <img className={styles.cart1Icon3} alt="" src="/cart1.svg" />
                <div className={styles.addToCartFrame}>
                  <div className={styles.addToCart3}>Add To Cart</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.quiltedSatinJacketParent}>
            <div className={styles.quiltedSatinJacket}>
              Quilted Satin Jacket
            </div>
            <div className={styles.frame}>
              <div className={styles.div2}>$750</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
