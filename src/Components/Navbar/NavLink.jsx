import Link from "next/link";

export default function NavLink({href, text}) {
    return (<li>
        <Link href={href}>{text}</Link>
    </li>
    );
}