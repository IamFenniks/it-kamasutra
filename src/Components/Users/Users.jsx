import axios from "axios";
import React from "react";
import style from "./Users.module.css"
import userPhoto from "./../../images/users.png"

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
            .then(response => {  this.props.setUsers(response.data.items);
                                 this.props.setTotalCount(response.data.totalCount); });    
    }

    onChangePage = (curPage) => {
        debugger;
        this.props.setPage(curPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${curPage}`)
            .then(response => { this.props.setUsers(response.data.items); });
    }
    
    render() {
        let pageSize = Math.ceil (this.props.totalCount / this.props.pageSize);
        let pages = [];
        for(let i=1; i<=pageSize; i++){
            pages.push(i);
        }
        return (
            <main className={ style.users }>
                <div className={ style.users_header }>
                    <h2>Пользователи</h2>
                    <div className={ style.pagination }>
                        {
                            pages.map((p, index) => { 
                                if(index < 10) {
                                    return (
                                        <span onClick={ (e) => { this.onChangePage(p) } }
                                            className={this.props.currentPage === p && style.active}>
                                                {p}
                                        </span>
                                    )
                                }
                            })    
                        }
                        
                    </div>
                </div>

                {
                    this.props.users.map(u => <div key={u.id} className={style.user_element}>
                        <div className={style.left_side}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto } alt="user avtar" />
                            { u.followed 
                                ? <button onClick={ () => { this.props.unfollowed(u.id) } }>Follow</button> 
                                : <button onClick={ () => { this.props.followed(u.id) } }>Unfollow</button>
                            }
                            
                        </div>

                        <div className={style.rigth_side}>
                            <div>
                                <p><b><i>Имя:</i></b> {u.name}</p>
                                <p><b><i>Статус:</i></b> {u.status}</p>
                            </div>
                            <div>
                                <p><b><i>Страна:</i></b> {"u.location.country"}</p>
                                <p><b><i>Город:</i></b> {"u.location.city"}</p>
                            </div>
                        </div>
                    </div>
                    )
                }
            </main>
        )    
    }
    
}

export default Users;
