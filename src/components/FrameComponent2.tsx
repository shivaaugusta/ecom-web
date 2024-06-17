import { FunctionComponent } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.instanceParent}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.instanceChild} />
          </div>
          <div className={styles.categories}>Categories</div>
        </div>
        <h1 className={styles.browseByCategory}>Browse By Category</h1>
      </div>
      <div className={styles.fillWithLeftArrowParent}>
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
  );
};

export default FrameComponent2;
