import BrandSocial from "@/components/footer/brand_social";
import ContactCallToAction from "@/components/footer/contact_call_to_action";
import FooterLegalNotice from "@/components/footer/footer_legal_notice";
import NavigationHighlight from "@/components/footer/navigation_highlight";
import React from "react";
import styles from "./index.module.css";
type Props = {};

const FooterSection = (props: Props) => {
  return (
    <footer className={`${styles["footer-wrapper"]} fluid`}>
      <div className="container">
        <div>
          <BrandSocial />
        </div>
        <div>
          <NavigationHighlight />
        </div>
        <div>
          <ContactCallToAction />
        </div>
        <div>
          <FooterLegalNotice />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
