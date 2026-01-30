"use client";

import { useState } from "react";
import classes from './page.module.css'

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
                <button onClick={increaseCounter}>+</button>
                <button onClick={decreaseCounter}>-</button>
                <button onClick={resetCounter}>Reset</button>
            </div>

            <br />
            <hr />
            <br />

            <div>
                {/* ب صح تكون هايد لو غلط تتحول ل شوو و اظهر الليست use state لو ال  */}
                <button onClick={toggleMenu}>{showList ? "Hide" : "Show"} menu</button>
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