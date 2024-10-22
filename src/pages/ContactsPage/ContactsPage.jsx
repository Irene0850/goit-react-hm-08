import { useDispatch, useSelector } from "react-redux";
import { getContacts, getLoading } from "../../redux/contacts/selectors";
import { selectNameFilter } from "../../redux/filters/selectors";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";

const ContactPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const filter = useSelector(selectNameFilter);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ContactForm />
      <SearchBox value={search} onChange={setSearch} />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ContactList contacts={filteredContacts} />
      )}
    </div>
  );
};

export default ContactPage;
