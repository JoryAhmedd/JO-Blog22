import Image from "next/image";
import classes from "@/Components/Home/Welcome.module.css";
import Button from "../UiElements/Button";
export default function Welcome() {
  return (
    <section className={classes["welcome"]}>
      <div className={classes["text"]}>
        <p className={classes["welcome-text"]}>welcome</p>
        <p className={classes["vision"]}>learning web</p>
        <p className={classes["vision"]}> programming today</p>
        <p className={classes["desc"]}>Lorem ipsum dolor, sit amet elit.</p>

        <div className={classes["buttons"]}>
          <Button href="/blog" className={classes["blog-btn"]}>
            Blog
          </Button>
          <Button outline href="/courses">
            Courses
          </Button>
        </div>
      </div>

      <div className={classes["img"]}>
        <Image
          src="/images/background.jpg"
          alt="positive quotes"
          width={600}
          height={400}
          loading="eager"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
