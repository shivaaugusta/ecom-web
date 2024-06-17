import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
  iPSLCDGamingMonitor?: string;
  prop?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
  iPSLCDGamingMonitor,
  prop,
}) => {
  return (
    <div className={[styles.ipsLcdGamingMonitorParent, className].join(" ")}>
      <div className={styles.ipsLcdGaming}>{iPSLCDGamingMonitor}</div>
      <div className={styles.wrapper}>
        <div className={styles.div}>{prop}</div>
      </div>
      <div className={styles.fiveStarParent}>
        <div className={styles.fiveStar}>
          <img className={styles.vectorIcon} alt="" src="/star-one.svg" />
          <img className={styles.vectorIcon1} alt="" src="/star-one.svg" />
          <img className={styles.vectorIcon2} alt="" src="/star-one.svg" />
          <img className={styles.vectorIcon3} alt="" src="/star-one.svg" />
          <img className={styles.vectorIcon4} alt="" src="/star-one.svg" />
        </div>
        <div className={styles.div1}>(65)</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
