import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./Context/Appcontext";
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="789780064223-o3dcf8o0gi7732l88tu7r6uh9vg11vou.apps.googleusercontent.com">
        <ChakraProvider>
          <BrowserRouter>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </BrowserRouter>
        </ChakraProvider>
      </GoogleOAuthProvider>,
  </React.StrictMode>
);

reportWebVitals();
