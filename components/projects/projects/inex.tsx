import TitleComponent from "@/utils/title_section";
import React from "react";
import ProjectItem from "../project_item";
import styles from "./index.module.css";
import ButtonColorful from "@/utils/button_colorful";
import Link from "next/link";
import image1 from "@/assets/images/project 1.jpg";

type Props = {};

const ProjectsComponent = (props: Props) => {
  const projects = [
    {
      images: image1,
      name: "gymfitnes.com",
      link: "https://react-tailwind-typescript-three.vercel.app/",
      category: "Fitnes",
    },
    {
      images: image1,
      name: "qazsaygaci.az",
      link: "https://qazsaygaci.az/",
      category: "Energetika",
    },
    {
      images: image1,
      name: "aeec.az",
      link: "https://aeec.az/",
      category: "Energetika",
    },
    {
      images: image1,
      name: "bars.com.az",
      link: "https://www.bars.com.az/",
      category: "Qaz & Tikinti",
    },
  ];
  return (
    <div>
      <div>
        <TitleComponent
          title="Son işlərimiz"
          description="Müştərilərimizin ehtiyaclarını dinləyir, ideyalarını anlayır və onları unikal dizayn və funksionallıqla həyata keçiririk. Burada təqdim etdiyimiz işlər, yalnız bir nəticə deyil — bu, arxasında dayanan strateji düşüncə, kreativ yanaşma və texnoloji yeniliklərin məhsuludur."
        />
      </div>
      <div className={styles["projects-grid"]}>
        {projects.map((project, index) => (
          <Link href={project.link} key={index}>
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
