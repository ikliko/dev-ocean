import {combineReducers, createStore} from 'redux';
import {businessReducer} from "./business/models/BusinessReducer";

export const rootReducer = combineReducers({businessReducer});

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);