import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store  from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <GoogleOAuthProvider clientId="1035045865518-01bp5g7b5m7c6f584ujfah3h5nat3t75.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
        
      </ChakraProvider>
    </BrowserRouter>
  
  </Provider>
);

reportWebVitals();
