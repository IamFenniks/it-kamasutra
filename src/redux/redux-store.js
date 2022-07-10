import { combineReducers, legacy_createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser
});

let store = legacy_createStore(reducers);

export default store;