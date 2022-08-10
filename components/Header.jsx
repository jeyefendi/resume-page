import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import Image from "next/image";
import styles from "../src/styles/Layout.module.css";

const Header = () => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <header>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/logo.webp" alt="me" layout="fill"/>
          </a>
        </Link>
      </div>

      <nav>
        <Link href="/about">
          <a className={currentRoute === "/about" ? "active" : "non-active"}>about</a>
        </Link>
        <Link href="/projects">
          <a className={currentRoute === "/projects" ? "active" : "non-active"}>projects</a>
        </Link>
        <Link href="/contact">
          <a className={currentRoute === "/contact" ? "active" : "non-active"}>contact</a>
        </Link>
      </nav>

      <div className={styles.home}>
        <div className={styles.house}>
          <Image src="/home.webp" alt="home" layout="fill" />
        </div>
        <address className={styles.location}>MOSCOW</address>
      </div>
    </header>
  );
};

export default Header;
