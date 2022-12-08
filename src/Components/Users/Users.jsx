import React from "react";
import style from "./Users.module.css";
import TopPaginator from "../Common/pagination/TopPaginator";
import User from "./User";


const Users = (props) => {
    return (
        <main className={ style.users }>
            <div className={ style.users_header }>
                <h2>Пользователи</h2>
                                    {/* -------- COMPONENT CHILDREN -------- */}
                <TopPaginator 
                    onChangePage={ props.onChangePage } 
                    currentPage={ props.currentPage } 
                    totalCount={ props.totalCount }
                    pageSize={ props.pageSize } 
                />
            </div>

            <div className={style.users_list}>
{                                    /* -------- COMPONENT CHILDREN --------- */
                props.users.map((u, index) => <User key={index} user={ u } { ...props } />)
            }
            </div>            
        </main>
    )  
}

export default Users;
