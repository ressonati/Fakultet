import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {initialStoreState, reducers, StoreState, StoreActionsTypes} from './store'

const store=createStore<StoreState, StoreActionsTypes, any, any>
(reducers, initialStoreState, composeWithDevTools());

export default store;
