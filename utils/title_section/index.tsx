import React from "react";
import styles from "./index.module.css";

type Props = {
  title: string;
  description: string;
};

const TitleComponent = ({ title, description }: Props) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default TitleComponent;
