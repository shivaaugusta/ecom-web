import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Content.module.css";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onExclusiveTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.content, className].join(" ")}>
      <div className={styles.topHeader}>
        <div className={styles.summerSaleBanner}>
          <div className={styles.saleMessage}>
            <div className={styles.bannerSlogan}>
              <div className={styles.summerSaleFor}>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </div>
            </div>
            <a className={styles.shopnow}>ShopNow</a>
          </div>
          <div className={styles.language}>
            <div className={styles.languageSelect}>
              <a className={styles.english}>English</a>
            </div>
            <img className={styles.dropdownIcon} alt="" src="/dropdown.svg" />
          </div>
        </div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navBar}>
          <div className={styles.header}>
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                <div className={styles.logo}>
                  <a
                    className={styles.exclusive}
                    onClick={onExclusiveTextClick}
                  >
                    Exclusive
                  </a>
                </div>
                <div className={styles.headerLinks}>
                  <div className={styles.header1}>
                    <a className={styles.home} onClick={onExclusiveTextClick}>
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
                    <img
                      className={styles.underlineIcon}
                      loading="lazy"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default Content;
