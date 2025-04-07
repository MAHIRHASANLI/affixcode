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

const MobileVersion = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  function handleOpen() {
    setIsOpen((prev) => {
      const newState = !prev;
      if (newState) {
        setScrollPosition(window.scrollY); // Hal-hazırki scroll mövqeyini yadda saxlayırıq
        document.body.style.position = "fixed";
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.width = "100%";
      } else {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollPosition);
      }
      return newState;
    });
  }

  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>,
    href: string
  ) {
    event.preventDefault();

    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div>
      <div className={styles["mobile-nav-wrapper"]}>
        <div className={styles["mobile-logo"]}>
          <LogoComponent href="/" />
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
              <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
                Haqqımızda
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, "#services")}
              >
                Xidmətlər
              </a>
            </li>
            <li>
              <a
                href="#project"
                onClick={(e) => handleLinkClick(e, "#project")}
              >
                Layihələr
              </a>
            </li>
            <li>
              <a href="#blog" onClick={(e) => handleLinkClick(e, "#blog")}>
                Blog
              </a>
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
          <div
            className={styles["mobile-nav-btn"]}
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            <ButtonColorful>Bizimlə əlaqə</ButtonColorful>
          </div>
        </div>
        <div className={styles["burger-icon"]} onClick={handleOpen}>
          {isOpen ? <MdClose /> : <RxHamburgerMenu />}
        </div>
      </div>
    </div>
  );
};

export default MobileVersion;
