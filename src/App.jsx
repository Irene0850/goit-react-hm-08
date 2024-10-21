import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { lazy, Suspense, useEffect } from "react";
import { Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePages/HomePages"));

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                element={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};
