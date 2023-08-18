import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navbar_logo} href="/">
        LastOf_us
      </Link>
      <ul className={styles.navbar_links}>
        <li>
          <Link className={styles.navbar_link} href="/nutritions">
            Nutritions
          </Link>
        </li>
        <li>
          <Link className={styles.navbar_link} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.navbar_link}>
            Sign Up
          </Link>
        </li>
        <li>
          <Link href="/" className={styles.navbar_link}>
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
