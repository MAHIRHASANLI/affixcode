import React, { useState, ReactNode } from "react";
import styles from "./index.module.css";
import Sidebar from "@/components/(admin)/sidebar";
import Header from "@/components/(admin)/header";

import "@/styles/reset.css";
import "@/styles/global.css";

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pageWrapper}>
        <Sidebar />

        <div className={styles.contentArea}>
          <div>
            <Header />
          </div>
          <div className={styles.main}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
