import { FunctionComponent, useCallback } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent1 from "../components/FrameComponent1";
import Separator from "../components/Separator";
import Cart4 from "../components/Cart4";
import Cart3 from "../components/Cart3";
import Cart2 from "../components/Cart2";
import CartWithFlatDiscountCart from "../components/CartWithFlatDiscountCart";
import Cart1 from "../components/Cart1";
import Cart from "../components/Cart";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./ECommerceHomePage.module.css";

const ECommerceHomePage: FunctionComponent = () => {
  const onCartContainerClick = useCallback(() => {
    // Please sync "Product Details page" to the project
  }, []);

  return (
    <div className={styles.eCommerceHomepage}>
      <div className={styles.topHeaderWrapper}>
        <div className={styles.topHeader}>
          <div className={styles.innerTopHeader}>
            <div className={styles.headerLinksContainer}>
              <div className={styles.summerSaleForAllSwimSuitsWrapper}>
                <div className={styles.summerSaleFor}>
                  Summer Sale For All Swim Suits And Free Express Delivery - OFF
                  50%!
                </div>
              </div>
              <a className={styles.shopnow}>ShopNow</a>
            </div>
            <div className={styles.languageContainer}>
              <div className={styles.englishWrapper}>
                <a className={styles.english}>English</a>
              </div>
              <img className={styles.dropdownIcon} alt="" src="/dropdown.svg" />
            </div>
          </div>
        </div>
      </div>
      <FrameComponent3 />
      <FrameComponent1 />
      <section className={styles.icon}>
        <div className={styles.categoryName}>
          <Separator />
          <div className={styles.ourProdContentParent}>
            <div className={styles.ourProdContent}>
              <div className={styles.ourProductsInner}>
                <div className={styles.ourProductsHeader}>
                  <div className={styles.ourProductsBackgroundWrapper}>
                    <div className={styles.ourProductsBackground} />
                  </div>
                  <div className={styles.ourProducts}>Our Products</div>
                </div>
                <h1 className={styles.exploreOurProducts}>
                  Explore Our Products
                </h1>
              </div>
              <div className={styles.ourProdNav}>
                <img
                  className={styles.fillWithLeftArrow}
                  alt=""
                  src="/fill-with-left-arrow.svg"
                />
                <img
                  className={styles.fillWithRightArrow}
                  alt=""
                  src="/fill-with-right-arrow.svg"
                />
              </div>
            </div>
            <div className={styles.ourProductsGrid}>
              <Cart4 />
              <Cart3 />
              <Cart2 />
              <CartWithFlatDiscountCart />
            </div>
            <div className={styles.newArrivalsGrid}>
              <Cart1 />
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
                  <div className={styles.copaSense1Wrapper}>
                    <img
                      className={styles.copaSense1Icon}
                      alt=""
                      src="/copa-sense-1@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.jrZoomSoccerCleatsParent}>
                  <div className={styles.jrZoomSoccer}>
                    Jr. Zoom Soccer Cleats
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>$1160</div>
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
                      <div className={styles.div1}>(35)</div>
                    </div>
                  </div>
                  <div className={styles.colourChnage}>
                    <img
                      className={styles.colourChnageChild}
                      alt=""
                      src="/group-1000005935-1.svg"
                    />
                    <div className={styles.colourChnageItem} />
                  </div>
                </div>
              </div>
              <Cart onCartContainerClick={onCartContainerClick} />
              <div className={styles.cart2}>
                <div className={styles.cart3}>
                  <div className={styles.fillHeartGroup}>
                    <img
                      className={styles.fillHeartIcon1}
                      alt=""
                      src="/fill-heart.svg"
                    />
                    <img
                      className={styles.fillEyeIcon1}
                      alt=""
                      src="/fill-eye.svg"
                    />
                  </div>
                  <img
                    className={styles.cartChild}
                    alt=""
                    src="/frame-608@2x.png"
                  />
                </div>
                <div className={styles.quiltedSatinJacketParent}>
                  <div className={styles.quiltedSatinJacket}>
                    Quilted Satin Jacket
                  </div>
                  <div className={styles.frameGroup}>
                    <div className={styles.container}>
                      <div className={styles.div2}>$660</div>
                    </div>
                    <div className={styles.fourHalfStarParent}>
                      <div className={styles.fourHalfStar}>
                        <img
                          className={styles.vectorIcon5}
                          alt=""
                          src="/star-one.svg"
                        />
                        <img
                          className={styles.vectorIcon6}
                          alt=""
                          src="/star-one.svg"
                        />
                        <img
                          className={styles.vectorIcon7}
                          alt=""
                          src="/star-one.svg"
                        />
                        <img
                          className={styles.vectorIcon8}
                          alt=""
                          src="/star-one.svg"
                        />
                        <img
                          className={styles.starHalfFilledIcon}
                          alt=""
                          src="/starhalffilled.svg"
                        />
                      </div>
                      <div className={styles.div3}>(55)</div>
                    </div>
                  </div>
                  <div className={styles.colourChnage1}>
                    <img
                      className={styles.colourChnageInner}
                      alt=""
                      src="/group-1000005935-3.svg"
                    />
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.viewAllNewProductsContaine}>
            <button className={styles.viewAllProductsWrapper}>
              <div className={styles.viewAllProducts}>View All Products</div>
            </button>
          </div>
        </div>
      </section>
      <FrameComponent />
      <section className={styles.servicesContainerWrapper}>
        <div className={styles.servicesContainer}>
          <header className={styles.services}>
            <div className={styles.instanceParent}>
              <div className={styles.servicesParent}>
                <img
                  className={styles.servicesIcon}
                  loading="lazy"
                  alt=""
                  src="/services.svg"
                />
                <div className={styles.serviceDescriptionsContainer}>
                  <div className={styles.freeAndFast}>
                    FREE AND FAST DELIVERY
                  </div>
                  <div className={styles.freeDeliveryFor}>
                    Free delivery for all orders over $140
                  </div>
                </div>
              </div>
              <div className={styles.servicesGroup}>
                <img
                  className={styles.servicesIcon1}
                  alt=""
                  src="/services-1.svg"
                />
                <div className={styles.customerServiceParent}>
                  <div className={styles.customerService}>
                    24/7 CUSTOMER SERVICE
                  </div>
                  <div className={styles.friendly247Customer}>
                    Friendly 24/7 customer support
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.servicesIcon2}
                  alt=""
                  src="/services-2.svg"
                />
                <div className={styles.moneyBackGuaranteeParent}>
                  <div className={styles.moneyBackGuarantee}>
                    MONEY BACK GUARANTEE
                  </div>
                  <div className={styles.weReurnMoney}>
                    We reurn money within 30 days
                  </div>
                </div>
              </div>
              <div className={styles.servicesParent1}>
                <img
                  className={styles.servicesIcon3}
                  alt=""
                  src="/services-2.svg"
                />
                <div className={styles.moneyBackGuaranteeGroup}>
                  <div className={styles.moneyBackGuarantee1}>
                    MONEY BACK GUARANTEE
                  </div>
                  <div className={styles.weReurnMoney1}>
                    We reurn money within 30 days
                  </div>
                </div>
              </div>
            </div>
          </header>
          <img
            className={styles.fillWithUpArrow}
            loading="lazy"
            alt=""
            src="/fill-with-up-arrow.svg"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ECommerceHomePage;
