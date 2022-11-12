import React, { useEffect } from "react";
import { useState } from "react";
import style from './Musik.module.css';

const Musik = () => {
    const [count, setCount] = useState(0);

    useEffect( () => {
        setTimeout(() => {
            console.log(`You clicked ${ count } times.`);
        }, 3000);
    } );

    return (
        <main className={style.musik}>
            <h3>Musik</h3>
            
            <div>
                <p>You clicked { count } times.</p>

                <button onClick={ () => setCount(count + 1) }>
                    Click me
                </button>
            </div>
        </main>
    );
}

export default Musik;