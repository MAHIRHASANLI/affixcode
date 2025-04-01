import ServicesItem from "@/components/services/service_item";
import ServicesIntro from "@/components/services/services_intro";

import styles from "./index.module.css";

type Props = {};

const ServicesSection = (props: Props) => {
  return (
    <section className="section">
      <div className={styles["services-grid"]}>
        <div className={styles["services-item"]}>
          <ServicesIntro />
        </div>
        <div className={styles["services-item"]}>
          <ServicesItem />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
