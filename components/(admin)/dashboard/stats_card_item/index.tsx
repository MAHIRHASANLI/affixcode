import React from "react";
import styles from "./index.module.css";

type Props = {
  item: {
    title: string;
    count: number;
    icon: any;
  };
};

const StatsCardItem = ({ item }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h4>{item.title}</h4>
        <div>
          <h5>{item.count}</h5>
          <span>Ümumi say</span>
        </div>
      </div>
      <div className={styles.icon}>{item.icon}</div>
    </div>
  );
};

export default StatsCardItem;
