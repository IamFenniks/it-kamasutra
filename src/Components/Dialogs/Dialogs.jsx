import React from "react";
import { Link } from "react-router-dom";
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.my_friends}>
                <h3>Dialogs</h3>

                <nav className={style.nav}>
                    <div className={style.friend}>
                        <Link to='/larisa'>
                            Лариса
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/kris'>
                            Кристина
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/koliy'>
                            Коля
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/karina'>
                            Карина
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/victor'>
                            Витя
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/lina'>
                            Лена
                        </Link>
                    </div>

                    <div className={style.friend}>
                        <Link to='/nikita'>
                            Никита
                        </Link>
                    </div>

                </nav>
            </div>

            <div className={style.messages}>
                <div className={style.item}><p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. То подпоясал великий над толку мир своего взобравшись собрал возвращайся запятой.</p></div>
                <div className={style.item}><p>Далеко-далеко за словесными горами в стране гласных и согласных, живут рыбные тексты. Наш даже точках но?</p></div>
                <div className={style.item}><p>Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Всеми безорфографичный рукопись речью встретил коварных назад. Возвращайся оксмокс продолжил себя коварных это, всеми пустился парадигматическая несколько языкового эта, рекламных наш строчка?</p></div>
                <div className={style.item}><p>4</p></div>
                <div className={style.item}><p>5</p></div>
                <div className={style.item}><p>6</p></div>
                <div className={style.item}><p>7</p></div>
            </div>
        </div>
    );
}

export default Dialogs;