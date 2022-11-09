import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./sass/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { getDefaultProvider } from "ethers";
import { Mainnet, Config, Kovan, DAppProvider, Rinkeby } from "@usedapp/core";

const config: Config = {
  networks: [Rinkeby],
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Kovan.chainId]: getDefaultProvider("kovan"),
    [Rinkeby.chainId]: getDefaultProvider("rinkeby"),
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
