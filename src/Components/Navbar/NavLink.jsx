// مش لازم اعمل يوز كلاينت عشان اصلا الاب اخدها ف الابن هينطبق عليها عادي
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from './NavLink.module.css';

export default function NavLink({href, text, hideNavList}) {
    // لو هما قد بعض هيكونوا صح
    const pathname = usePathname();

    // 1) href: where will I go by clicking on the link, (from parent).
    // 2) pathname: current link where I am, (from browser).
    const isActive = href === '/' ? pathname === href : pathname.startsWith(href);
    
    return (
        // لو اكتف ب ترو تحط الكلاس دا
    <li onClick={hideNavList} className={`${isActive ? classes['active'] : ""}`}>
        <Link href={href}>{text}</Link>
    </li>
    );
}