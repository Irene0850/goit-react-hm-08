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
        Log Out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={css.icon}
        >
          <path d="M16 13v-2H7V9l-5 4 5 4v-3h9z" />
          <path d="M20 3H10v2h10v14H10v2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
        </svg>
      </button>
    </div>
  );
};

export default UserMenu;
