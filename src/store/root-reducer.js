import { combineReducers } from "redux";

import { positionReducer } from "./positions/position-reducer";

export const rootReducer = combineReducers({
    positions: positionReducer,
});
