import React, { Component } from 'react';

export class Contacts extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={() => onDeleteContact(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
