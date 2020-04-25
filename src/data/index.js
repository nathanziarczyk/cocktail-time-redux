import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import cocktailsReducer from "./cocktails";
import favoritesReducer from "./favorites";

export default createStore(
  combineReducers({
    cocktails: cocktailsReducer,
    favorites: favoritesReducer,
  }),
  composeWithDevTools(applyMiddleware(logger, thunk))
);
