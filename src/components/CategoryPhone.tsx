import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./CategoryPhone.module.css";

export type CategoryPhoneType = {
  className?: string;
  vector?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const CategoryPhone: FunctionComponent<CategoryPhoneType> = ({
  className = "",
  vector,
  propMinWidth,
}) => {
  const categoryPhoneStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.categoryPhone, className].join(" ")}
      style={categoryPhoneStyle}
    >
      <div className={styles.categorySmartwatchWrapper}>
        <div className={styles.categorySmartwatch}>
          <img className={styles.vectorIcon} alt="" src={vector} />
          <div className={styles.starFour}>
            <img className={styles.vectorIcon1} alt="" src="/vector-28.svg" />
          </div>
          <div className={styles.price}>
            <input className={styles.vector} type="checkbox" />
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.frameItem} />
              <div className={styles.frameInner} />
            </div>
          </div>
          <div className={styles.productImage}>
            <img className={styles.vectorIcon2} alt="" src="/vector-30.svg" />
          </div>
        </div>
      </div>
      <div className={styles.smartwatch}>SmartWatch</div>
    </div>
  );
};

export default CategoryPhone;
