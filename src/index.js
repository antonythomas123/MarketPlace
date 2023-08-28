import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StateProvider } from "./contexts/StateProvider";
import reducer, { initialState } from "./reducers/reducer";
import { UserProvider } from "./contexts/UserContext";
import { OrderProvider } from "./contexts/OrderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <OrderProvider>
          <App />
        </OrderProvider>
      </StateProvider>
    </UserProvider>
  </React.StrictMode>
);
