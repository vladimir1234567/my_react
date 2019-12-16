import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import musikReducer from "./musikReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    dialogsPage: dialogsReducer,
    MusikPage: musikReducer
});

let store = createStore(reducers);

export default store;