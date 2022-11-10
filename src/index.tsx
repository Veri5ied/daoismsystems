import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Config, Mainnet, DAppProvider, Goerli } from "@usedapp/core";

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]:
      "https://mainnet.infura.io/v3/b61a50c12adb4672a87618354e30b897",
    [Goerli.chainId]:
      "https://goerli.infura.io/v3/b61a50c12adb4672a87618354e30b897",
  },
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>
);

reportWebVitals();
