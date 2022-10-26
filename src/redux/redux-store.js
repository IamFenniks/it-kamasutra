import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { appReduser } from './appReduser'
import authReduser from "./authReduser";
import commonReduser from "./commonReduser";
import dialogsReduser from "./dialogsReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";
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