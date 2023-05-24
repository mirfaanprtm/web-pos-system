import {combineReducers, createStore} from "redux"
import {authenticationReducer} from "./features/login/state/AuthenticationReducer";
import Penjualan from "./pages/penjualan";

const rootReducer = combineReducers({
    authenticationReducer,
    Penjualan
})
export const setupStore = () => {
    return createStore(rootReducer)
}