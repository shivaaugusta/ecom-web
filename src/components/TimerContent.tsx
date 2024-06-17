import { FunctionComponent } from "react";
import styles from "./TimerContent.module.css";

export type TimerContentType = {
  className?: string;
};

const TimerContent: FunctionComponent<TimerContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.timerContent, className].join(" ")}>
      <div className={styles.timerNumbers}>
        <div className={styles.flashSaleLabel}>
          <h1 className={styles.flashSales}>Flash Sales</h1>
        </div>
        <div className={styles.timerDisplay}>
          <div className={styles.daysMinutes}>
            <div className={styles.days}>Days</div>
            <div className={styles.colon}>
              <b className={styles.b}>03</b>
              <div className={styles.semicolon}>
                <div className={styles.semiclone}>
                  <div className={styles.semicloneChild} />
                  <div className={styles.semicloneItem} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.hours1}>Hours</div>
            <div className={styles.hoursSeparator}>
              <b className={styles.hoursColon}>23</b>
              <div className={styles.hoursSemicolon}>
                <div className={styles.semiclone1}>
                  <div className={styles.semicloneInner} />
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.daysMinutes1}>
            <a className={styles.minutes}>Minutes</a>
            <div className={styles.parent}>
              <b className={styles.b1}>19</b>
              <div className={styles.semicloneWrapper}>
                <div className={styles.semiclone2}>
                  <div className={styles.semicloneChild1} />
                  <div className={styles.semicloneChild2} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.seconds}>
            <div className={styles.seconds1}>Seconds</div>
            <b className={styles.secondsColon}>56</b>
          </div>
        </div>
      </div>
      <div className={styles.timerContentInner}>
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
    </div>
  );
};

export default TimerContent;
