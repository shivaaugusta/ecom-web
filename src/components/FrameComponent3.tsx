import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TopCategories from "./TopCategories";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHeaderContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onCart1WithBuyClick = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.headerParent}>
        <div className={styles.header}>
          <div className={styles.logoContainerWrapper}>
            <div className={styles.logoContainer}>
              <div className={styles.logo}>
                <a className={styles.exclusive}>Exclusive</a>
              </div>
              <div className={styles.headerMenu}>
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
                <div
                  className={styles.header4}
                  onClick={onHeaderContainerClick}
                >
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
                onClick={onCart1WithBuyClick}
              />
              <img className={styles.userIcon} alt="" src="/user.svg" />
            </div>
          </div>
        </div>
        <div className={styles.topCategoriesParent}>
          <TopCategories />
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.banner}>
            <div className={styles.productBannerParent}>
              <div className={styles.productBanner}>
                <img
                  className={styles.pxAppleGrayLogo1Icon}
                  loading="lazy"
                  alt=""
                  src="/1200pxapple-gray-logo-1@2x.png"
                />
                <div className={styles.iphone14SeriesWrapper}>
                  <div className={styles.iphone14Series}>iPhone 14 Series</div>
                </div>
              </div>
              <h1 className={styles.upTo10}>Up to 10% off Voucher</h1>
              <div className={styles.frameWrapper}>
                <div className={styles.frameGroup}>
                  <div className={styles.shopNowParent}>
                    <div className={styles.shopNow}>Shop Now</div>
                    <div className={styles.frameItem} />
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
              <div className={styles.frameContainer}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameInner} />
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
            <div className={styles.bannerBottom}>
              <img
                className={styles.heroEndframeCvklg0xk3w6eLaIcon}
                alt=""
                src="/hero-endframe--cvklg0xk3w6e-large-2@2x.png"
              />
              <img
                className={styles.bannerBottomChild}
                alt=""
                src="/group-1000005940.svg"
              />
              <div className={styles.bannerBottomInner}>
                <div className={styles.frameChild1} />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameChild2} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.lineIcon} alt="" src="/line-3.svg" />
    </section>
  );
};

export default FrameComponent3;
