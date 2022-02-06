import React from "react";
import { store } from "../../app/store";
import { setFilter } from "../../features/contacts";

export const Filter = () => {
  const onFilter = (e) => {
    store.dispatch(setFilter(e.target.value));
  };

  return (
    <div>
      <label>
        Find contacts by name:
        <input
          onChange={onFilter}
          type="text"
          placeholder="Filter Contacts"></input>
      </label>
    </div>
  );
};
