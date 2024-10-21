import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ item: { id, name, number } }) => {
  const dispath = useDispatch();
  const handleDelete = () => dispath(deleteContact(id));

  return (
    <div className={css.contactList}>
      <li className={css.contacts}>
        <div className={css.contactItem}>
          <p className={css.name}>{name}</p>
          <p className={css.number}>{number}</p>
        </div>
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default Contact;
