import Link from "next/link";
import classes from "./Button.module.css";

export default function Button({
  children,
  onClick,
  danger,
  outline,
  success,
  href,
  className,
  disabled,
  // type = "submit",
}) {
  const classN = `
    ${classes["button"]}
    ${danger ? classes["danger"] : ""} 
    ${outline ? classes["outline"] : ""} 
    ${success ? classes["success"] : ""} 
    ${className}
   `;

  if (href)
    return (
      <Link href={href} className={classN}>
        {children}
      </Link>
    );

  return (
    <button onClick={onClick} className={classN} disabled={disabled}>
      {children}
    </button>
  );
}
