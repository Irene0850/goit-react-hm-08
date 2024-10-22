import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.form}>
      <label className={css.label} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        id={searchId}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};

export default SearchBox;
