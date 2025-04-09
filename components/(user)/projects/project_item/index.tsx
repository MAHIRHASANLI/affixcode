import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import img from "@/assets/images/project 1.jpg";

import { BsArrowRight } from "react-icons/bs";
type Props = {
  project: {
    title: string;
    imageUrl: string;
    description: string;
  };
};

const ProjectItem = ({ project }: Props) => {
  return (
    <div className={styles["project-card"]}>
      <div className={styles["project-card-image"]}>
        <Image
          src={img}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className={styles["project-card-content"]}>
        <div className={styles["project-card-text"]}>
          <h5>{project.title}</h5>
        </div>
        <div className={styles["project-card-text-2"]}>
          <span>{project.description}</span>
          <BsArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
