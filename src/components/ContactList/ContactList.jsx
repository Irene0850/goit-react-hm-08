import { useDispatch, useSelector } from "react-redux";
import css from "./ContactList.module.css";
import {
  getError,
  getLoading,
  setFilteredContacts,
} from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operations";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(setFilteredContacts);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <ul className={css.contactList}>
        {loading && !error && <Loader />}
        {error && <p>Oops, something went wrong! Please, try again</p>}
        {filteredContacts.map((contact) => {
          <Contact
            key={contact.id}
            item={contact}
            onDeleteContact={() => handleDeleteContact(contact.id)}
          />;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
