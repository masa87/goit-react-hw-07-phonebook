import React from "react";
import { addContact } from "../../features/contacts";
import { store } from "../../app/store";

console.clear();

const ContactForm = () => {
  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = e.target;
    store.dispatch(
      addContact({ name: name.value, number: Number(number.value) })
    );
    form.reset();
  };

  return (
    <form onSubmit={submitForm}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        {" "}
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
