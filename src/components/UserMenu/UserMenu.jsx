import { useDispatch, useSelector } from "react-redux";

import css from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations";
import { setUser } from "../../redux/auth/selectors";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(setUser);

  return (
    <div className={css.wrapper}>
      <p className={css.page}>Welcome, {user.name}</p>
      <button
        className={css.btn}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
