import React, { Component } from 'react';
import contacts from './../contacts.json';
import Card from './../components/Card';

class Contacts extends Component {
  state = {
    contactsData: contacts.slice(0, 5),
    fullList: contacts.slice(5, contacts.length),
  };

  randomContact = (contact) => {
    const randomIndex = Math.floor(
      Math.random() * this.state.contactsData.length
    );

    const contactRandom = this.state.fullList[randomIndex]; // get random contact
    // update the full list to remove the random contact from it
    const fullListCopy = [...this.state.fullList];
    fullListCopy.splice(randomIndex, 1);

    // Make the id unique to ensure list item has unique id
    let newContacts = [...this.state.contactsData];
    newContacts.push(contactRandom);

    this.setState({ contactsData: newContacts, fullList: fullListCopy });

    // this.setState({ contactsData: newContacts, fullList: fullListCopy }, () => {
    //   this.sortByPopularity()
    // });
  };

  sortByName = () => {
    let contactsOrdered = this.state.contactsData.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });
    this.setState({ contactsData: contactsOrdered });
  };

  sortByPopularity = (contact) => {
    let orderedByPop = this.state.contactsData.sort(function (a, b) {
      return a.popularity - b.popularity;
    });

    this.setState({ contactsData: orderedByPop });
  };

  deleteContact = (id) => {
    let updatedContacts = this.state.contactsData.filter((contact) => {
      if (contact.id !== id) return contact;
    });

    this.setState({ contactsData: updatedContacts });

    // returns { name: 'Some Actor'}
  };

  render() {
    return (
      <div>
        <button onClick={this.randomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <table>
          <tr>
            <th>Picture </th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {this.state.contactsData.map((contactsObj) => {
            return (
              <Card
                key={contactsObj.id}
                {...contactsObj}
                removeContact={this.deleteContact}
              />
            );
          })}
        </table>
      </div>
    );
  }
}

export default Contacts;
