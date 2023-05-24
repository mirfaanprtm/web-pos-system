import {combineReducers, createStore} from "redux"
import {authenticationReducer} from "./features/login/state/AuthenticationReducer";

const rootReducer = combineReducers({
    authenticationReducer,
})
export const setupStore = () => {
    return createStore(rootReducer)
}
