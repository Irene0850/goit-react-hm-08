import { getIsLoggedIn } from "../../redux/auth/selectors";

import { useSelector } from "react-redux";

import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
