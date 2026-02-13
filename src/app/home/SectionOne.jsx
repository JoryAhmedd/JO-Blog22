import Button from "@/Components/Navbar/UiElements/Button";
import classes from "./sections.module.css";
export default function SectionOne() {
    return (
        <section className={classes['section']}>
            <h1 className={classes['title']}>welcome to my blog</h1>
            <h4 className={classes['description']}>Daily Thoughts & Ideas</h4>
            <Button href='/blog' className={classes['button']} outline>Read the latest posts</Button>
        </section>
    )
}