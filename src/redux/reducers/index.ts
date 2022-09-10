import {combineReducers} from "redux";
import {shopListReducer} from "./shopList-reducer";

export const rootReducer = combineReducers({
    shopList: shopListReducer
});