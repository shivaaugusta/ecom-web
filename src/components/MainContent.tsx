import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MainContent.module.css";

export type MainContentType = {
  className?: string;
};

const MainContent: FunctionComponent<MainContentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className={[styles.mainContent, className].join(" ")}>
      <div className={styles.pageHeader}>
        <div className={styles.header}>
          <nav className={styles.headerElements}>
            <nav className={styles.logoSearch}>
              <div className={styles.logo}>
                <a className={styles.exclusive}>Exclusive</a>
              </div>
              <nav className={styles.navigation}>
                <div className={styles.header1}>
                  <a className={styles.home} onClick={onHomeTextClick}>
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
          <div className={styles.searchUser}>
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
            <div className={styles.userActions}>
              <div className={styles.wishlist}>
                <img
                  className={styles.wishlistIcon}
                  alt=""
                  src="/wishlist-icon.svg"
                />
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <a className={styles.cartItemCount}>4</a>
                </div>
              </div>
              <img
                className={styles.cart1WithBuy}
                loading="lazy"
                alt=""
                src="/cart1-with-buy.svg"
              />
              <img
                className={styles.userIcon}
                loading="lazy"
                alt=""
                src="/user.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.mainContentChild} alt="" src="/line-3.svg" />
    </header>
  );
};

export default MainContent;
