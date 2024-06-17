import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ProductPrice.module.css";

export type ProductPriceType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ProductPrice: FunctionComponent<ProductPriceType> = ({
  className = "",
  propWidth,
  propPadding,
  propAlignSelf,
}) => {
  const productPriceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propPadding, propAlignSelf]);

  return (
    <div
      className={[styles.productPrice, className].join(" ")}
      style={productPriceStyle}
    >
      <div className={styles.productPriceInner}>
        <button className={styles.viewAllProductsWrapper}>
          <div className={styles.viewAllProducts}>View All Products</div>
        </button>
      </div>
      <div className={styles.starThree} />
    </div>
  );
};

export default ProductPrice;
