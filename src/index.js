import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, {registerServiceWorker} from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import {HashRouter} from "react-router-dom";
import { AppContextProvider } from "./Context/Appcontext";
import {GoogleOAuthProvider} from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
if("serviceWorker" in navigator){
    window.addEventListener("load",()=>{
        navigator.serviceWorker.register("/serviceWorker.js").then(()=>{
            console.log("service Worker registered !")
        }).catch((error)=>{
            console.log("service Worker registration failed : ",error)
        });
    })
}

root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="789780064223-o3dcf8o0gi7732l88tu7r6uh9vg11vou.apps.googleusercontent.com">
        <ChakraProvider>
          <HashRouter>
            <AppContextProvider>
              <App />
            </AppContextProvider>
          </HashRouter>
        </ChakraProvider>
      </GoogleOAuthProvider>,
  </React.StrictMode>
);

reportWebVitals();
