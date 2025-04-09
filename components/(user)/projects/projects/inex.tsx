import TitleComponent from "@/utils/title_section";
import React from "react";
import ProjectItem from "../project_item";
import styles from "./index.module.css";
import ButtonColorful from "@/utils/button_colorful";
import Link from "next/link";
import { getAllProjectRequests } from "@/api/project_requests";

type Props = {};

const ProjectsComponent = async (props: Props) => {
  const projects = await getAllProjectRequests();

  return (
    <div>
      <div>
        <TitleComponent
          title="Son işlərimiz"
          description="Müştərilərimizin ehtiyaclarını dinləyir, ideyalarını anlayır və onları unikal dizayn və funksionallıqla həyata keçiririk. Burada təqdim etdiyimiz işlər, yalnız bir nəticə deyil — bu, arxasında dayanan strateji düşüncə, kreativ yanaşma və texnoloji yeniliklərin məhsuludur."
        />
      </div>
      <div className={styles["projects-grid"]}>
        {projects?.slice(0, 4).map((project: any) => (
          <Link href={project.link} key={project._id} target="_blank">
            <ProjectItem project={project} />
          </Link>
        ))}
      </div>
      <div className={styles["projects-button"]}>
        <ButtonColorful>Daha çox iş</ButtonColorful>
      </div>
    </div>
  );
};

export default ProjectsComponent;
