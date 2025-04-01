import TitleComponent from "@/utils/title_section";
import React from "react";
import ProjectItem from "../project_item";
import styles from "./index.module.css";
import ButtonColorful from "@/utils/button_colorful";
import Link from "next/link";

type Props = {};

const ProjectsComponent = (props: Props) => {
  return (
    <div>
      <div>
        <TitleComponent
          title="Son işlərimiz"
          description="Müştərilərimizin ehtiyaclarını dinləyir, ideyalarını anlayır və onları unikal dizayn və funksionallıqla həyata keçiririk. Burada təqdim etdiyimiz işlər, yalnız bir nəticə deyil — bu, arxasında dayanan strateji düşüncə, kreativ yanaşma və texnoloji yeniliklərin məhsuludur."
        />
      </div>
      <div className={styles["projects-grid"]}>
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <Link href="/" key={index}>
              <ProjectItem />
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
