import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        {contact.name} : {contact.number}
        <button className={css.delete} onClick={() => onDelete(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);
