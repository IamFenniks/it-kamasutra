import { combineReducers, legacy_createStore } from "redux";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser
});

let store = legacy_createStore(reducers);

export default store;