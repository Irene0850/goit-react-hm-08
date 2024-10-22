import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ element, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return isLoggedIn ? element : <Navigate to={redirectTo} />;
};
