import { combineReducers, legacy_createStore } from "redux";
import authReduser from "./authReduser";
import commonReduser from "./commonReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    common: commonReduser,
    auth: authReduser
});

let store = legacy_createStore(reducers);

export default store;