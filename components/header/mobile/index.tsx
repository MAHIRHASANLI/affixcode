"use client";
import React from "react";
import styles from "./index.module.css";
import Link from "next/link";
import ButtonColorful from "@/utils/button_colorful";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import LogoComponent from "@/utils/logo";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
type Props = {};

const MobileVersion = (props: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  function handleOpen() {
    setIsOpen(!isOpen);
    if (isOpen) {
      var menu = document.querySelector(".mobile-menu");
      var logo = document.querySelector(".mobile-logo");
      logo?.classList.add();
    }
  }
  return (
    <div className={styles["mobile-nav-wrapper"]}>
      <div className={styles["mobile-logo"]}>
        <LogoComponent />
      </div>

      <div
        className={styles["mobile-menu"]}
        style={{
          width: isOpen ? "100%" : "0",
          left: isOpen ? "0" : "-100px",
        }}
      >
        <ul className={styles["mobile-links"]}>
          <li>
            <Link href="/">Haqqımızda</Link>{" "}
          </li>
          <li>
            <Link href="/#services">Xidmətlər</Link>{" "}
          </li>
          <li>
            <Link href="/#project">Layihələr</Link>{" "}
          </li>
          <li>
            <Link href="/#blog">Blog</Link>{" "}
          </li>
        </ul>
        <div className={styles.info}>
          <p>Bizi izləyin</p>
          <div className={styles.socials}>
            <Link href="https://www.instagram.com/affixcode" target="_blank">
              <FaInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/mahir-hasanli-002413273/">
              <CiLinkedin />
            </Link>
            <Link href="https://wa.me/+994777113121">
              <FaWhatsapp />
            </Link>
          </div>
        </div>
        <div className={styles["mobile-nav-btn"]}>
          <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
        </div>
      </div>

      <div className={styles["burger-icon"]} onClick={handleOpen}>
        {isOpen ? <MdClose /> : <RxHamburgerMenu />}
      </div>
    </div>
  );
};

export default MobileVersion;
