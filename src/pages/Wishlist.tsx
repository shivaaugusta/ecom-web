import { FunctionComponent } from "react";
import MainContent from "../components/MainContent";
import Products from "../components/Products";
import RecommendedProducts from "../components/RecommendedProducts";
import Footer from "../components/Footer";
import styles from "./Wishlist.module.css";

const Wishlist: FunctionComponent = () => {
  return (
    <div className={styles.wishlist}>
      <div className={styles.topHeader}>
        <div className={styles.saleBanner}>
          <div className={styles.saleBannerLeft}>
            <div className={styles.summerSaleForAllSwimSuitsWrapper}>
              <div className={styles.summerSaleFor}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
            </div>
            <a className={styles.shopnow}>ShopNow</a>
          </div>
          <div className={styles.languageSelector}>
            <div className={styles.languageDropdown}>
              <a className={styles.english}>English</a>
            </div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown.svg" />
          </div>
        </div>
      </div>
      <MainContent />
      <section className={styles.content}>
        <div className={styles.contentContainer}>
          <Products />
          <RecommendedProducts />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Wishlist;
