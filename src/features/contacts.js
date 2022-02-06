import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const defaultState = {
  contacts: [],
  filter: "",
};

const slice = createSlice({
  name: "contacts",
  initialState: defaultState,
  reducers: {
    addContact: (state, { payload }) => {
      const id = nanoid();
      state.contacts.push({
        id,
        name: payload.name,
        number: payload.number,
      });
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setContacts: (state, { payload }) => {
      state.contacts = payload;
    },
  },
});

export const { addContact, deleteContact, setFilter, setContacts } =
  slice.actions;

export default slice.reducer;
