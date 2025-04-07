"use client";

import React from "react";
import styles from "./index.module.css";
import LogoComponent from "@/utils/logo";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaBlog } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function handleCloseSidebar() {
    setSidebarOpen((prevState) => !prevState);
  }
  return (
    <aside
      className={`${styles["sidebar-wrapper"]} `}
      // ${
      //   !sidebarOpen ? styles.sidebarClosed : ""
      // }`}
    >
      <div
        className={styles.sidebar}
        style={{ width: sidebarOpen ? "70px" : "250px" }}
        // width: 65px;
      >
        <nav className={styles.menu}>
          <ul>
            <li
              className={styles["logo"]}
              style={{ paddingLeft: sidebarOpen ? "18px" : "25px" }}
            >
              <div style={{ display: sidebarOpen ? "none" : "inline" }}>
                <LogoComponent linkHref="/admin/dashboard" />
              </div>
              <button onClick={handleCloseSidebar}>
                <RxHamburgerMenu />
              </button>
            </li>
            <li className={styles.menuItem}>
              {" "}
              <Link href="/admin/dashboard" title="Dashboard">
                {" "}
                <MdDashboard />{" "}
                <span style={{ display: sidebarOpen ? "none" : "inline" }}>
                  Dashboard
                </span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/project" title="Proyektler">
                <FaProjectDiagram />
                <span style={{ display: sidebarOpen ? "none" : "inline" }}>
                  Proyektler
                </span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/blog" title="Blog">
                <FaBlog />{" "}
                <span style={{ display: sidebarOpen ? "none" : "inline" }}>
                  Blog
                </span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/team" title="Komanda">
                <RiTeamFill />
                <span style={{ display: sidebarOpen ? "none" : "inline" }}>
                  {" "}
                  Komanda
                </span>
              </Link>
            </li>
          </ul>
          {/* <hr /> */}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
