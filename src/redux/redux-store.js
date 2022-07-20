import { combineReducers, legacy_createStore } from "redux";
import commonReduser from "./commonReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    common: commonReduser
});

let store = legacy_createStore(reducers);

export default store;