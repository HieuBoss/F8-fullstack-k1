import { Auth0Provider } from "@auth0/auth0-react";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Auth0Provider
      domain="dev-ym20m3k6q2jfy10j.us.auth0.com"
      clientId="DaiF1TLrpUBty5zJAwPuZdtaiS1nzcfU"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </>
);
