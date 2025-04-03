import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

import { BsArrowRight } from "react-icons/bs";
type Props = {
  project: {
    name: string;
    images: any;
    category: string;
  };
};

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card-image"]}>
        <Image
          src={project.images}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles["project-card-content"]}>
        <div className={styles["project-card-text"]}>
          <h5>{project.name}</h5>
        </div>
        <div className={styles["project-card-text-2"]}>
          <span>{project.category}</span>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
