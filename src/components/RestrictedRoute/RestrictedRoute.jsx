import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};
