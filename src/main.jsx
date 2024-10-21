import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGatee loading={null} persistor={persistStore}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
