import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { appReduser } from './redusers/appReduser'
import authReduser from "./redusers/authReduser";
import commonReduser from "./redusers/commonReduser";
import dialogsReduser from "./redusers/dialogsReduser";
import profileReduser from "./redusers/profileReduser";
import usersReduser from "./redusers/usersReduser";
import thunkMiddleWear from 'redux-thunk';

let reducers = combineReducers ({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    common: commonReduser,
    auth: authReduser,
    app: appReduser
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleWear));

export default store;