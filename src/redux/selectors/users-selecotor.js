/*
*Реселект используется для дого, чтобы в один
* дочерний (супер) селектор можно было вложить
* от одного до тёх родительских селекторов.
* Простых и Супер также.

*/

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.common.isFetching;
}

export const getFollowBtnDisabled = (state) => {
    return state.common.followBtnDisabled;
}