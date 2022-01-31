import React from "react";
import { useSelector } from "react-redux";
import { deleteContact } from "../../features/contacts";
import { store } from "../../app/store";
import { saveToLocalStore } from "../../utils/localStorage";

const showContacts = (contacts, filter) => {
  const normalizedFilter = contacts.filter.toLowerCase().trim();

  return contacts.contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const Contacts = () => {
  const contacts = useSelector(({ contacts, filter }) =>
    showContacts(contacts, filter)
  );
  saveToLocalStore("CONTACTS", contacts);

  return (
    <>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            type="button"
            onClick={() => store.dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
