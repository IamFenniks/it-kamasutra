import React from "react";
import { useState } from "react";
import style from "./Paginator.module.css";


const TopPaginator = ({totalCount, pageSize, onChangePage, currentPage, portionSize = 10}) => {
    //  pageCount - кол-во страниц с 24 польз-ми
    let pageCount = Math.ceil(totalCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i); // Заносим в массив общ. кол-во страниц с 24 польз-ми
    }

    let portionCount = Math.ceil(pageCount / portionSize) // Кол-во порций кнопок кратных (по-умолчанию) 10
    let [portionNum, setPortionNum] = useState(1);
    let leftPortionNum = (portionNum - 1) * portionSize + 1;
    let rightPortionNum = portionNum * portionSize;
    // debugger;
    return (
        <div className={style.pagination}>
            {portionNum > 1 && <button onClick={() => { setPortionNum(portionNum - 1) }}><span>&#8672;</span> Пред</button>}
            {pages
                .filter(p => p >= leftPortionNum && p <= rightPortionNum)
                .map(p => {
                    return (
                        <span onClick={(e) => { onChangePage(p) }}
                            className={currentPage === p && style.active}
                            key={p}>
                            {p}
                        </span>
                    )
                })
            }
            {portionCount > portionNum && <button onClick={() => { setPortionNum(portionNum + 1) }}>След <span>&#8674;</span></button>}
            
            ({ rightPortionNum } <span>страниц из </span> { pageCount })
        </div>
    )
}

export default TopPaginator;
