import { getIsLoggedIn } from "../../redux/auth/selectors";

import { useSelector } from "react-redux";

import css from "./Navigation.module.css";

import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/homeIcon.svg";

import contactIcon from "../../assets/contactIcon.svg";

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <img src={homeIcon} alt="Home" className={css.icon} />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <img src={contactIcon} alt="Contact" className={css.icon} />
        </NavLink>
      )}
    </nav>
  );
};
