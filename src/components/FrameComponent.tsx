import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  propPadding,
}) => {
  const perfumeCardStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.newArrivalsContainer}>
          <div className={styles.newArrivalsHeader}>
            <div className={styles.newArrivalsHeaderInner}>
              <div className={styles.instanceChild} />
            </div>
            <div className={styles.newArrivalsTitle}>
              <div className={styles.featured}>Featured</div>
            </div>
          </div>
          <h1 className={styles.newArrival}>New Arrival</h1>
        </div>
        <div className={styles.productCardsParent}>
          <div className={styles.productCards}>
            <div className={styles.productCard}>
              <img
                className={styles.ps5SlimGoedkopePlaystationIcon}
                alt=""
                src="/ps5slimgoedkopeplaystation-large-1@2x.png"
              />
              <h3 className={styles.playstation5}>PlayStation 5</h3>
              <div className={styles.blackAndWhite}>
                Black and White version of the PS5 coming out on sale.
              </div>
              <div className={styles.shopNowButtons}>
                <div className={styles.shopNow}>Shop Now</div>
                <img
                  className={styles.underlineIcon}
                  alt=""
                  src="/underline-1.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.products}>
            <div className={styles.speakersCard}>
              <h3 className={styles.womensCollections}>Women’s Collections</h3>
              <div className={styles.womanCollectionWrapper}>
                <div className={styles.womanCollection}>
                  <img
                    className={styles.attractiveWomanWearingHatPIcon}
                    loading="lazy"
                    alt=""
                    src="/attractivewomanwearinghatposingblackbackground-1@2x.png"
                  />
                  <div className={styles.featuredWomanCollections}>
                    Featured woman collections that give you another vibe.
                  </div>
                </div>
              </div>
              <div className={styles.speakersCardInner}>
                <div className={styles.shopNowParent}>
                  <div className={styles.shopNow1}>Shop Now</div>
                  <img
                    className={styles.underlineIcon1}
                    alt=""
                    src="/underline-1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.speakersContentParent}>
              <div className={styles.speakersContent}>
                <h3 className={styles.speakers}>Speakers</h3>
                <div className={styles.speakerContainer}>
                  <div className={styles.speakersImageContainer}>
                    <div className={styles.speakerImage}>
                      <div className={styles.wrapperEllipse24}>
                        <img
                          className={styles.wrapperEllipse24Child}
                          alt=""
                          src="/ellipse-24.svg"
                        />
                      </div>
                      <img
                        className={styles.amazonEchoPngClipartTranspIcon}
                        loading="lazy"
                        alt=""
                        src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className={styles.amazonWirelessSpeakers}>
                    Amazon wireless speakers
                  </div>
                </div>
                <div className={styles.speakersShopNowWrapper}>
                  <div className={styles.shopNow2}>Shop Now</div>
                  <img
                    className={styles.underlineIcon2}
                    alt=""
                    src="/underline-1.svg"
                  />
                </div>
              </div>
              <div className={styles.perfumeCard} style={perfumeCardStyle}>
                <div className={styles.perfumeDetails}>
                  <div className={styles.wrapperEllipse241}>
                    <img
                      className={styles.wrapperEllipse24Item}
                      alt=""
                      src="/ellipse-24-1.svg"
                    />
                  </div>
                  <div className={styles.e82cd70aa6522dd785109a455904cWrapper}>
                    <img
                      className={styles.e82cd70aa6522dd785109a455904cIcon}
                      loading="lazy"
                      alt=""
                      src="/652e82cd70aa6522dd785109a455904c@2x.png"
                    />
                  </div>
                </div>
                <h3 className={styles.perfume}>Perfume</h3>
                <div className={styles.gucciIntenseOud}>
                  GUCCI INTENSE OUD EDP
                </div>
                <div className={styles.button}>
                  <div className={styles.shopNow3}>Shop Now</div>
                  <img
                    className={styles.underlineIcon3}
                    alt=""
                    src="/underline-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
