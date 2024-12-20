import { useSelector } from "react-redux";

import { Navigation } from "../Navigation/Navigation";

import { AuthNav } from "../AuthNav/AuthNav";

import UserMenu from "../UserMenu/UserMenu";

import css from "./AppBar.module.css";

import { getIsLoggedIn } from "../../redux/auth/selectors";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
