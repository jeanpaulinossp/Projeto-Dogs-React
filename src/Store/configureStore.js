import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import photo from "./photo";
import token from "./token";
import user from "./user";
import feed from "./feed";
import ui from "./ui";
import photoPhost from "./photoPhost";

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo, token, user, feed, ui, photoPhost });
const store = configureStore({ reducer, middleware });

export default store;
