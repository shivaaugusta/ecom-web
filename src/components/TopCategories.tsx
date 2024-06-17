import { FunctionComponent } from "react";
import styles from "./TopCategories.module.css";

export type TopCategoriesType = {
  className?: string;
};

const TopCategories: FunctionComponent<TopCategoriesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.topCategories, className].join(" ")}>
      <div className={styles.subCategoriesParent}>
        <div className={styles.subCategories}>
          <div className={styles.womansFashion}>Woman’s Fashion</div>
          <div className={styles.mensFashion}>Men’s Fashion</div>
          <div className={styles.electronics}>Electronics</div>
        </div>
        <div className={styles.categoryDropdowns}>
          <img
            className={styles.dropdownIcon}
            alt=""
            src="/dropdown-1@2x.png"
          />
          <img
            className={styles.dropdownIcon1}
            alt=""
            src="/dropdown-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.homeLifestyle}>{`Home & Lifestyle`}</div>
      <a className={styles.medicine}>Medicine</a>
      <div className={styles.sportsOutdoor}>{`Sports & Outdoor`}</div>
      <div className={styles.babysToys}>{`Baby’s & Toys`}</div>
      <div className={styles.groceriesPets}>{`Groceries & Pets`}</div>
      <div className={styles.healthBeauty}>{`Health & Beauty`}</div>
    </div>
  );
};

export default TopCategories;
