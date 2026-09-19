"use client";
import Link from "next/link";
import NavLink from "./NavLink";

import classes from "./Navbar.module.css";
import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { IoSunnyOutline } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [showNavList, setShowNavList] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const toggleNavList = () => setShowNavList(!showNavList);
  const hideNavList = () => setShowNavList(false);

  return (
    <nav className={classes["nav-bar"]}>
      <h1>
        <Link href={"/"}>JO Blog</Link>
      </h1>

      <button onClick={toggleTheme} className={classes["theme-btn"]}>
        {theme === "light" ? <FaMoon /> : <IoSunnyOutline />}
      </button>

      <ul
        className={`${classes["nav-list"]} ${showNavList ? classes["show-nav-list"] : ""}`}
      >
        <NavLink href="/" text="Home" hideNavList={hideNavList} />
        <NavLink href="/blog" text="Blog" hideNavList={hideNavList} />
        <NavLink href="/about" text="About" hideNavList={hideNavList} />
        <NavLink href="/contacts" text="Contacts" hideNavList={hideNavList} />
        <NavLink href="/login" text="Login" hideNavList={hideNavList} />
        <NavLink
          href="/sign-up"
          text="Sign-Up"
          hideNavList={hideNavList}
        />{" "}
      </ul>

      <button
        onClick={toggleNavList}
        className={classes["menu-button"]}
        aria-label="menu"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
}
