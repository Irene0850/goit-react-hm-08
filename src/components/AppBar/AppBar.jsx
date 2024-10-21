import { useSelector } from "react-redux";

import { Navigation } from "../Novigation/Novigation";

import { AuthNav } from "../AuthNav/AuthNav";

import UserMenu from "../UserMenu/UserMenu";

import { getIsloggedIn } from "../../redux/auth/selectors";

import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(getIsloggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
