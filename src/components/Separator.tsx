import { FunctionComponent } from "react";
import styles from "./Separator.module.css";

export type SeparatorType = {
  className?: string;
};

const Separator: FunctionComponent<SeparatorType> = ({ className = "" }) => {
  return (
    <div className={[styles.separator, className].join(" ")}>
      <div className={styles.musicExpInner}>
        <div className={styles.musicBannerContainer}>
          <div className={styles.musicBannerContent}>
            <div className={styles.categories}>Categories</div>
            <h1 className={styles.enhanceYourMusic}>
              Enhance Your Music Experience
            </h1>
            <div className={styles.musicBannerTimer}>
              <div className={styles.musicTimerContainer}>
                <div className={styles.flashSellTimer}>
                  <div className={styles.flashSellTimerChild} />
                  <div className={styles.timerContent}>
                    <div className={styles.musicTimerPadding}>
                      <div className={styles.timerInner}>23</div>
                    </div>
                    <div className={styles.hours}>Hours</div>
                  </div>
                </div>
                <div className={styles.flashSellTimer1}>
                  <div className={styles.flashSellTimerItem} />
                  <div className={styles.frameParent}>
                    <div className={styles.wrapper}>
                      <div className={styles.div}>05</div>
                    </div>
                    <div className={styles.days}>Days</div>
                  </div>
                </div>
                <div className={styles.flashSellTimer2}>
                  <div className={styles.flashSellTimerInner} />
                  <div className={styles.frameGroup}>
                    <div className={styles.container}>
                      <div className={styles.div1}>59</div>
                    </div>
                    <a className={styles.minutes}>Minutes</a>
                  </div>
                </div>
                <div className={styles.flashSellTimer3}>
                  <div className={styles.ellipseDiv} />
                  <div className={styles.frameContainer}>
                    <div className={styles.frame}>
                      <div className={styles.div2}>35</div>
                    </div>
                    <div className={styles.seconds}>Seconds</div>
                  </div>
                </div>
              </div>
              <button className={styles.button}>
                <div className={styles.viewAllProducts}>Buy Now!</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.musicImageContainer}>
          <div className={styles.musicImageContainerChild} />
          <div className={styles.productImage}>
            <img
              className={styles.jblBoombox2Hero020X11}
              loading="lazy"
              alt=""
              src="/jbl-boombox-2-hero-020-x1-1-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Separator;
