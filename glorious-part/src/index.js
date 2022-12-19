import { Auth0Provider } from "@auth0/auth0-react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
const container = document.getElementById("root");

const root = createRoot(container);
root.render(
  <Auth0Provider
    domain="dev-dxvlg0oe18ztvgqy.us.auth0.com"
    clientId="H6CxK265a5Sxtu5YW3SsmxvTUAbkNe5i"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
