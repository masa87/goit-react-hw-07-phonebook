import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "../features/contacts";
import { api } from "../utils/api.js";
// import { slice } from "./../features/contacts.js";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});
