"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import styles from "./index.module.css";
import { IoIosLogOut } from "react-icons/io";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();

  function handleLogout() {
    if (window.confirm("Çıxış edirsiniz?")) {
      document.cookie = "accessToken=; path=/; max-age=0";
      router.replace("/admin/login");
    }
  }
  return (
    <div className={styles["header-container"]}>
      <div className={styles["path-name"]}>
        <Link href={pathName}>{pathName.split("/")[2]}</Link>
      </div>

      <button className={styles.logout} onClick={handleLogout}>
        <IoIosLogOut />
      </button>
    </div>
  );
};

export default Header;
