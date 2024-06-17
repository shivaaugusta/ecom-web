import { FunctionComponent } from "react";
import CartWithFlatDiscount3 from "./CartWithFlatDiscount3";
import CartWithFlatDiscount2 from "./CartWithFlatDiscount2";
import CartWithFlatDiscount1 from "./CartWithFlatDiscount1";
import CartWithFlatDiscount from "./CartWithFlatDiscount";
import ProductPrice from "./ProductPrice";
import FrameComponent2 from "./FrameComponent2";
import CategoryPhone from "./CategoryPhone";
import Cart7 from "./Cart7";
import Cart6 from "./Cart6";
import Cart5 from "./Cart5";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.instanceParent}>
                <div className={styles.saleBackgroundWrapper}>
                  <div className={styles.saleBackground} />
                </div>
                <div className={styles.todaysWrapper}>
                  <div className={styles.todays}>Today’s</div>
                </div>
              </div>
              <h1 className={styles.flashSales}>Flash Sales</h1>
            </div>
            <div className={styles.servicesWrapper}>
              <div className={styles.timerUnitsParent}>
                <div className={styles.timerUnits}>
                  <div className={styles.days}>Days</div>
                  <b className={styles.semicolonSeparators}>03</b>
                </div>
                <div className={styles.timerUnits1}>
                  <div className={styles.semiclone}>
                    <div className={styles.semicloneChild} />
                    <div className={styles.semicloneItem} />
                  </div>
                </div>
                <div className={styles.timerUnits2}>
                  <div className={styles.hours}>Hours</div>
                  <b className={styles.b}>23</b>
                </div>
                <div className={styles.timerUnits3}>
                  <div className={styles.semiclone1}>
                    <div className={styles.semicloneInner} />
                    <div className={styles.ellipseDiv} />
                  </div>
                </div>
                <div className={styles.timerUnits4}>
                  <a className={styles.minutes}>Minutes</a>
                  <b className={styles.b1}>19</b>
                </div>
                <div className={styles.timerUnits5}>
                  <div className={styles.semiclone2}>
                    <div className={styles.semicloneChild1} />
                    <div className={styles.semicloneChild2} />
                  </div>
                </div>
                <div className={styles.timerUnits6}>
                  <div className={styles.seconds}>Seconds</div>
                  <b className={styles.b2}>56</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cartWithFlatDiscountParent}>
            <CartWithFlatDiscount3 />
            <CartWithFlatDiscount2 />
          </div>
        </div>
        <div className={styles.productScroll}>
          <div className={styles.timer}>
            <div className={styles.fillWithLeftArrowParent}>
              <img
                className={styles.fillWithLeftArrow}
                loading="lazy"
                alt=""
                src="/fill-with-left-arrow.svg"
              />
              <img
                className={styles.fillWithRightArrow}
                loading="lazy"
                alt=""
                src="/fill-with-right-arrow.svg"
              />
            </div>
          </div>
          <div className={styles.productRowTwo}>
            <CartWithFlatDiscount1 />
            <CartWithFlatDiscount />
            <div className={styles.cartWithFlatDiscount}>
              <div className={styles.discountPercentParent}>
                <div className={styles.discountPercent}>
                  <div className={styles.div}>-25%</div>
                </div>
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
                <div className={styles.samMoghadamKhamsehKvmdstrgoWrapper}>
                  <img
                    className={styles.samMoghadamKhamsehKvmdstrgoIcon}
                    alt=""
                    src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.sSeriesComfortChairParent}>
                <div
                  className={styles.sSeriesComfortChair}
                >{`S-Series Comfort Chair `}</div>
                <div className={styles.parent}>
                  <div className={styles.div1}>$375</div>
                  <div className={styles.div2}>$400</div>
                </div>
                <div className={styles.fourHalfStarParent}>
                  <div className={styles.fourHalfStar}>
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
                      className={styles.starHalfFilledIcon}
                      alt=""
                      src="/starhalffilled.svg"
                    />
                  </div>
                  <div className={styles.div3}>(99)</div>
                </div>
              </div>
            </div>
            <div className={styles.cartWithFlatDiscount1}>
              <div className={styles.discountPercentGroup}>
                <div className={styles.discountPercent1}>
                  <div className={styles.div4}>-25%</div>
                </div>
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
                <div className={styles.samMoghadamKhamsehKvmdstrgoContainer}>
                  <img
                    className={styles.samMoghadamKhamsehKvmdstrgoIcon1}
                    alt=""
                    src="/sammoghadamkhamsehkvmdstrgobmunsplash-1@2x.png"
                  />
                </div>
              </div>
              <div className={styles.sSeriesComfortChairGroup}>
                <div
                  className={styles.sSeriesComfortChair1}
                >{`S-Series Comfort Chair `}</div>
                <div className={styles.group}>
                  <div className={styles.div5}>$375</div>
                  <div className={styles.div6}>$400</div>
                </div>
                <div className={styles.fourHalfStarGroup}>
                  <div className={styles.fourHalfStar1}>
                    <img
                      className={styles.vectorIcon4}
                      alt=""
                      src="/star-one.svg"
                    />
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
                      className={styles.starHalfFilledIcon1}
                      alt=""
                      src="/starhalffilled.svg"
                    />
                  </div>
                  <div className={styles.div7}>(99)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductPrice />
      <div className={styles.starFour}>
        <FrameComponent2 />
        <div className={styles.categoryPhoneParent}>
          <div className={styles.categoryPhone}>
            <div className={styles.starOne}>
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
          <CategoryPhone vector="pending_I85:1678;138:1655;138:1514" />
          <div className={styles.categoryPhone2}>
            <div className={styles.categoryCameraWrapper}>
              <img
                className={styles.categoryCameraIcon}
                loading="lazy"
                alt=""
                src="/categorycamera.svg"
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
      <div className={styles.productRating}>
        <div className={styles.productRatingChild} />
      </div>
      <div className={styles.starTwo}>
        <div className={styles.frameParent2}>
          <div className={styles.frameParent3}>
            <div className={styles.instanceGroup}>
              <div className={styles.rectangleWrapper}>
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
        <div className={styles.cartParent}>
          <Cart7 />
          <Cart6 />
          <Cart5 />
          <div className={styles.cart}>
            <div className={styles.cart1}>
              <div className={styles.fillHeartContainer}>
                <img
                  className={styles.fillHeartIcon2}
                  alt=""
                  src="/fill-heart.svg"
                />
                <img
                  className={styles.fillEyeIcon2}
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
                <div className={styles.div8}>$360</div>
              </div>
              <div className={styles.fiveStarParent}>
                <div className={styles.fiveStar}>
                  <img
                    className={styles.vectorIcon8}
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className={styles.vectorIcon9}
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className={styles.vectorIcon10}
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className={styles.vectorIcon11}
                    alt=""
                    src="/star-one.svg"
                  />
                  <img
                    className={styles.vectorIcon12}
                    alt=""
                    src="/star-one.svg"
                  />
                </div>
                <div className={styles.div9}>(65)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
