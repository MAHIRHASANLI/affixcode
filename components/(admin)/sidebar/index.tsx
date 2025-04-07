import React from "react";
import styles from "./index.module.css";
import LogoComponent from "@/utils/logo";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaBlog } from "react-icons/fa6";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <aside
      className={`${styles["sidebar-wrapper"]} `}
      // ${
      //   !sidebarOpen ? styles.sidebarClosed : ""
      // }`}
    >
      <div className={styles.sidebar}>
        <nav className={styles.menu}>
          <ul>
            <li className={styles["logo"]}>
              <LogoComponent />
            </li>
            <li className={styles.menuItem}>
              {" "}
              <Link href="/admin/dashboard">
                {" "}
                <MdDashboard /> Dashboard
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/project">
                <FaProjectDiagram />
                Projectler
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/blog">
                <FaBlog /> Blog
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/team">
                <RiTeamFill />
                Komanda
              </Link>
            </li>
          </ul>
          <hr />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
