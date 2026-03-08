import { createStore, applyMiddleware } from "redux";
import { taskReducer } from "./reducers/taskReducer";
import logger from "./middleware/logger";

const store = createStore(taskReducer, applyMiddleware(logger));

export default store;
