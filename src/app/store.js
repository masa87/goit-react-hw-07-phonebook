import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts";

const reducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({ reducer });
