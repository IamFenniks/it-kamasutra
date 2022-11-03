/*
    * Реселект используется для дого, чтобы в один
    * дочерний (супер) селектор можно было вложить
    * от одного до тёх родительских селекторов.
    * Простых и Супер также.
    * 
    * ОСНОВНОЕ ПРЕДНАЗНАЧЕНИЕ
    * Реселект следит, нужно ли запускать сложный алгоритм
    * вложенной функции или вложенных селекторов в данном селекторе,
    * при постоянном обновлении mapStateToProps
*/

import { createSelector } from "reselect";

// Пример использования...
const getUserSelector = (state) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUserSelector, /* getIsFetching, */
    (users, /* isFetching */) => {
    return users.filter(u => true);
    /* И здесь работа с ИзФетчингом */
})

export const getIsFetching = (state) => {
    return state.common.isFetching;
}
// Пример исплоьзования.

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCount = (state) => {
    return state.usersPage.totalCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}


export const getFollowBtnDisabled = (state) => {
    return state.common.followBtnDisabled;
}