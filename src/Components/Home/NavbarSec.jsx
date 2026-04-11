import classes from "@/Components/Home/styles.module.css";
export default function NavbarSec() {
  return (
    <nav className={classes["menuNav"]}>
      <ul>
        <li>Main Dishes</li>
        <li>Burger</li>
        <li>Pizza</li>
        <li>Drinks</li>
        <li>Desserts</li>
      </ul>
    </nav>
  );
}
