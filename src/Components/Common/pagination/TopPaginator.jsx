import React from "react";
import style from "./Paginator.module.css";


const TopPaginator = (props) => {
    let pageSize = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageSize; i++) {
        pages.push(i);
    }
    return (
        <div className={style.pagination}>
            {
                pages.map((p, index) => {
                    if (index < 10) {
                        return (
                            <span onClick={(e) => { props.onChangePage(p) }}
                                className={props.currentPage === p && style.active}
                                key={index}>
                                {p}
                            </span>
                        )
                    }
                })
            }
        </div>
    )
}

export default TopPaginator;
