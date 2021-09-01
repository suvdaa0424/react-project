import { combineReducers, createStore } from "redux";
import search from "./reducers/search"
import favorites from "./reducers/favorites"

const rootReducer = combineReducers({
    search: search,
    recipes: favorites
})
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;