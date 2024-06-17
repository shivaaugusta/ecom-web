import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Content1.module.css";

export type Content1Type = {
  className?: string;
};

const Content1: FunctionComponent<Content1Type> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.content, className].join(" ")}>
      <div className={styles.topHeader}>
        <div className={styles.topHeaderContainer}>
          <div className={styles.saleBannerContainer}>
            <div className={styles.saleBanner}>
              <div className={styles.summerSaleFor}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
            </div>
            <a className={styles.shopnow}>ShopNow</a>
          </div>
          <div className={styles.languageContainer}>
            <div className={styles.languageSelector}>
              <a className={styles.english}>English</a>
            </div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.headerComponents}>
          <div className={styles.header}>
            <nav className={styles.logoContainer}>
              <nav className={styles.logoParent}>
                <div className={styles.logo} onClick={onLogoContainerClick}>
                  <a className={styles.exclusive}>Exclusive</a>
                </div>
                <nav className={styles.menu}>
                  <div className={styles.header1}>
                    <a className={styles.home} onClick={onLogoContainerClick}>
                      Home
                    </a>
                  </div>
                  <div className={styles.header2}>
                    <a className={styles.contact}>Contact</a>
                  </div>
                  <div className={styles.header3}>
                    <a className={styles.about}>About</a>
                  </div>
                  <div className={styles.header4}>
                    <a className={styles.signUp}>Sign Up</a>
                  </div>
                </nav>
              </nav>
            </nav>
            <div className={styles.search}>
              <div className={styles.searchComponentSet}>
                <div className={styles.searchInput}>
                  <input
                    className={styles.whatAreYou}
                    placeholder="What are you looking for?"
                    type="text"
                  />
                  <img
                    className={styles.component2Icon}
                    alt=""
                    src="/component-2.svg"
                  />
                </div>
              </div>
              <div className={styles.wishlistParent}>
                <img
                  className={styles.wishlistIcon}
                  alt=""
                  src="/wishlist.svg"
                />
                <div className={styles.cart1WithBuy}>
                  <img className={styles.cart1Icon} alt="" src="/cart1.svg" />
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.div}>2</div>
                  </div>
                </div>
                <img className={styles.userIcon} alt="" src="/user.svg" />
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.navigationChild}
          loading="lazy"
          alt=""
          src="/line-3.svg"
        />
      </div>
    </header>
  );
};

export default Content1;
