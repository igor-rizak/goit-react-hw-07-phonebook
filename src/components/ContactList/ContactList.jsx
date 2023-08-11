import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Button } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/selectors';
import { removeContact } from '../redux/contacts-slice';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button type="button" name="delete" onClick={handleDelete}>
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.object,
  onRemoveContact: PropTypes.func,
};