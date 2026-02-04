"use client";

import { useState } from "react";
import classes from './page.module.css'
import Button from "@/Components/Navbar/UiElements/Button";

export default function BlogPage() {
    // counter: استبدلت ال 0 بيه
    const [counter, setCounter] = useState(0);
    // showlist: استبدلت ال true لحد ما اغيرها بيه
    // في البداية هي ظاهرة كدة
    const [showList, setShowList] = useState(true)

    const increaseCounter = () => {
        if (counter >= 10) return;
        setCounter(counter + 1);
    }
    const decreaseCounter = () => {
        if (counter <= 0)return;
        setCounter(counter - 1);
    }
    const resetCounter = () => setCounter(0);
    const toggleMenu = () => setShowList(!showList);
    
    return (
        <section>
            <h2>Blog Page</h2>
            <div>
                <p>{counter}</p>

{/* هيكون مش مفعل لما الكاونتر يكون اكبر من 10 */}
                <section className={classes['actions']}>
                    <Button onclick={increaseCounter} disabled={counter >= 10}>+</Button>
                    <Button onclick={decreaseCounter} outline disabled={counter <= 0}>-</Button>
                    <Button onclick={resetCounter} danger disabled={counter === 0}>Reset</Button>
                </section>
            </div>

            <br />
            <hr />
            <br />

            <div>
                {/* ب صح تكون هايد لو غلط تتحول ل شوو و اظهر الليست use state لو ال  */}
                <Button onClick={toggleMenu} danger={showList}>{showList ? "Hide" : "Show"} menu</Button>
                <ul className={`${classes['list']} ${!showList ? classes['hide-list'] : ''}`}>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                    <li>item 4</li>
                </ul>
            </div>
        </section>
    );
}