import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContainer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <div className={styles.footerTopLeft}>
                <div className={styles.logo}>
                  <h3 className={styles.exclusive}>Exclusive</h3>
                </div>
                <div className={styles.subscribe}>Subscribe</div>
              </div>
              <div className={styles.get10Off}>
                Get 10% off your first order
              </div>
            </div>
            <div className={styles.sendMail}>
              <input
                className={styles.enterYourEmail}
                placeholder="Enter your email"
                type="text"
              />
              <img className={styles.iconSend} alt="" src="/iconsend.svg" />
            </div>
          </div>
          <div className={styles.supportParent}>
            <div className={styles.support}>Support</div>
            <div className={styles.supportDetails}>
              <div className={styles.bijoySaraniDhaka}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </div>
              <div className={styles.exclusivegmailcom}>
                exclusive@gmail.com
              </div>
              <div className={styles.supportContact}>+88015-88888-9999</div>
            </div>
          </div>
          <div className={styles.accountParent}>
            <div className={styles.account}>Account</div>
            <div className={styles.accountLinks}>
              <div className={styles.myAccount}>My Account</div>
              <div className={styles.loginRegister}>Login / Register</div>
              <div className={styles.cart}>Cart</div>
              <div className={styles.wishlist}>Wishlist</div>
              <div className={styles.shop}>Shop</div>
            </div>
          </div>
          <div className={styles.quickLinkParent}>
            <div className={styles.quickLink}>Quick Link</div>
            <div className={styles.quickLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div className={styles.termsOfUse}>Terms Of Use</div>
              <div className={styles.faq}>FAQ</div>
              <div className={styles.contact}>Contact</div>
            </div>
          </div>
          <div className={styles.appDownloadContainerParent}>
            <div className={styles.appDownloadContainer}>
              <div className={styles.downloadApp}>Download App</div>
              <div className={styles.appDownloadContent}>
                <div className={styles.save3With}>
                  Save $3 with App New User Only
                </div>
                <div className={styles.appDownloadQR}>
                  <img
                    className={styles.qrCodeIcon}
                    loading="lazy"
                    alt=""
                    src="/qr-code@2x.png"
                  />
                  <div className={styles.appStoreButtons}>
                    <img
                      className={styles.googleplayIcon}
                      loading="lazy"
                      alt=""
                      src="/googleplay.svg"
                    />
                    <img
                      className={styles.appstoreIcon}
                      loading="lazy"
                      alt=""
                      src="/appstore@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.socialMediaIcons}>
              <img
                className={styles.iconFacebook}
                alt=""
                src="/iconfacebook.svg"
              />
              <img
                className={styles.iconTwitter}
                alt=""
                src="/icontwitter.svg"
              />
              <img
                className={styles.iconInstagram}
                alt=""
                src="/iconinstagram.svg"
              />
              <img
                className={styles.iconLinkedin}
                alt=""
                src="/iconlinkedin.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footerBottom}>
        <img className={styles.underlineIcon} alt="" src="/underline-5.svg" />
        <div className={styles.copyrightContentWrapper}>
          <div className={styles.copyrightContent}>
            <img
              className={styles.iconCopyright}
              alt=""
              src="/iconcopyright.svg"
            />
            <div className={styles.copyrightRimel2022}>
              Copyright Rimel 2022. All right reserved
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
