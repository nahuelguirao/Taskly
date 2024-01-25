import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { UserContextProvider } from "./context/UserContext.tsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
