"use client";

import React from "react";
import styles from "./index.module.css";
import LogoComponent from "@/utils/logo";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaBlog, FaMessage } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoNewspaper } from "react-icons/io5";

const Sidebar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  function handleCloseSidebar() {
    setSidebarOpen((prevState) => !prevState);
  }
  return (
    <aside className={`${styles["sidebar-wrapper"]} `}>
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
                <LogoComponent href="/admin/dashboard" />
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
                  Proyektlər
                </span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/admin/blog" title="Blog">
                <IoNewspaper />
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

            <li className={styles.menuItem}>
              <Link href="/admin/message" title="Komanda">
                <FaMessage />
                <span style={{ display: sidebarOpen ? "none" : "inline" }}>
                  {" "}
                  Mesajlar
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
