import { FunctionComponent } from "react";
import TopCategories from "./TopCategories";
import styles from "./Page.module.css";

export type PageType = {
  className?: string;
};

const Page: FunctionComponent<PageType> = ({ className = "" }) => {
  return (
    <section className={[styles.page, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.navigationContent}>
            <div className={styles.brandLogo}>
              <div className={styles.logo}>
                <a className={styles.exclusive}>Exclusive</a>
              </div>
              <div className={styles.navigationLinks}>
                <div className={styles.header1}>
                  <a className={styles.home}>Home</a>
                  <img
                    className={styles.underlineIcon}
                    alt=""
                    src="/underline.svg"
                  />
                </div>
                <div className={styles.header2}>
                  <a className={styles.contact}>Contact</a>
                </div>
                <div className={styles.header3}>
                  <a className={styles.about}>About</a>
                </div>
                <div className={styles.header4}>
                  <a className={styles.signUp}>Sign Up</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchAndWishlist}>
            <div className={styles.searchComponentSet}>
              <div className={styles.searchInput}>
                <input
                  className={styles.whatAreYou}
                  placeholder="What are you looking for?"
                  type="text"
                />
                <img
                  className={styles.component2Icon}
                  alt=""
                  src="/component-2.svg"
                />
              </div>
            </div>
            <div className={styles.wishlistCart}>
              <img className={styles.wishlistIcon} alt="" src="/wishlist.svg" />
              <img
                className={styles.cart1WithBuy}
                alt=""
                src="/cart1-with-buy.svg"
              />
              <img className={styles.userIcon} alt="" src="/user.svg" />
            </div>
          </div>
        </div>
        <div className={styles.navigationCategories}>
          <TopCategories />
          <div className={styles.categoryDivider}>
            <div className={styles.categoryDividerChild} />
          </div>
          <div className={styles.heroContentParent}>
            <div className={styles.heroContent}>
              <div className={styles.heroImage}>
                <div className={styles.imageContainer}>
                  <img
                    className={styles.pxAppleGrayLogo1Icon}
                    loading="lazy"
                    alt=""
                    src="/1200pxapple-gray-logo-1@2x.png"
                  />
                  <div className={styles.productName}>
                    <div className={styles.iphone14Series}>
                      iPhone 14 Series
                    </div>
                  </div>
                </div>
                <h1 className={styles.upTo10}>Up to 10% off Voucher</h1>
                <div className={styles.shopNowButtonContainer}>
                  <div className={styles.shopNowContainer}>
                    <div className={styles.shopNowParent}>
                      <div className={styles.shopNow}>Shop Now</div>
                      <div className={styles.frameChild} />
                    </div>
                    <div className={styles.iconsArrowRightWrapper}>
                      <img
                        className={styles.iconsArrowRight}
                        alt=""
                        src="/icons-arrowright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroEnd}>
              <img
                className={styles.heroEndframeCvklg0xk3w6eLaIcon}
                loading="lazy"
                alt=""
                src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.ellipseWrapper}>
                  <div className={styles.frameItem} />
                </div>
                <div className={styles.ellipseContainer}>
                  <div className={styles.frameInner} />
                </div>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.frameChild1} />
                </div>
                <div className={styles.ellipseFrame}>
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.pageChild} alt="" src="/line-3.svg" />
    </section>
  );
};

export default Page;
