import React from "react";
import styles from "./index.module.css";
import MainText from "@/components/main/main_text";
import MissionStatement from "@/components/main/main_mission";
import MainCard from "@/components/main/main_card";
import MainFeaturesList from "@/components/main/main_features_list";

type Props = {};

const MainSection = (props: Props) => {
  return (
    <section className="section">
      <div className={styles["main-grid"]}>
        <div className={styles["main-item"]}>
          <MainText />
        </div>
        <div className={styles["main-item"]}>
          <MissionStatement />
        </div>
        <div className={styles["main-item"]}>
          <MainCard />
        </div>
        <div className={styles["main-item"]}>
          <MainFeaturesList />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
