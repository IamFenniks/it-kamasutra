import React, { useEffect } from "react";
import { useState } from "react";
import style from './Musik.module.css';

const Musik = () => {
    // I. 
    const [count, setCount] = useState(0);

    useEffect( () => {
        setTimeout(() => {
            console.log(`You clicked ${ count } times.`);
        }, 3000);
    } );

    // II. BIND-ПРИВЯЗКА
    let user = {
        firstName: 'Вася',
        sayHi() {
            alert( `Привет, ${this.firstName}!` );
        }
    }
    let sayHi = user.sayHi.bind(user);
    setTimeout( sayHi, 2000 );

    // III. ЗАМЫКАНИЕ
    function createCounter() {
        let counter = 0;
        const myFunc = function() {
            counter++;
            return counter;
        }
        return myFunc;
    }
    const increment = createCounter();
    const c1 = increment();
    const c2 = increment();
    const c3 = increment();
    console.log(`The result is: `, c1, c2, c3);

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