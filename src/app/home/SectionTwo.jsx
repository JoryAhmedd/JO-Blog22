import Button from "@/Components/Navbar/UiElements/Button";
import classes from "./sections.module.css";
export default function SectionTwo() {
    return(
        <section className={classes['section2']}>
        <h2 className={classes['title2']}>Explore Topics</h2>
        <div>
            <h3 className={classes['h3']}>Creative Writing ✍️</h3>
            <p className={classes['p']}>Short stories and ideas to inspire.</p>
        </div>

        <div>
            <h3 className={classes['h3']}>Life Hacks 🌿</h3>
            <p className={classes['p']}>Tips to make your day easier.</p>
        </div>

        <div>
            <h3 className={classes['h3']}>Tech Trends 💻</h3>
            <p className={classes['p']}>What is new in the tech world.</p>
        </div>

        <div>
            <h3 className={classes['h3']}>Quick Reads 📖</h3>
            <p className={classes['p']}>Articles you can finish in 5 mins.</p>
        </div>

        <Button href='/blog' className={classes['button']} outline>Click Here</Button>
    </section>
    )
}
