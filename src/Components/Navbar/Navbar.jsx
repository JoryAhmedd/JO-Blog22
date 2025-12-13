import Link from "next/link";
import NavLink from "./NavLink";

import classes from './Navbar.module.css'
export default function Navbar() {
    return (
    <nav className={classes["nav-bar"]}>
        <h1>
            <Link href={'/'}>JO Blog</Link>
        </h1>

        <ul className={classes["nav-list"]}>
            <NavLink href='/' text="Home"/>
            <NavLink href='/blog' text="Blog"/>
            <NavLink href='/about' text="About"/>
            <NavLink href='/contacts' text="Contacts"/>
        </ul>

        <button className={classes["menu-button"]}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>
    );
}