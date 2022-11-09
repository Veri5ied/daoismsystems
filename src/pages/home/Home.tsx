import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mainnet,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Goerli,
} from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

import ConnectButton from "../../components/buttons/ConnectButton";

const Home = () => {
  const navigate = useNavigate();
  const { activateBrowserWallet, account, deactivate } = useEthers();
  return (
    <div className="home_container">
      <h1 className="glitch">Welcome to Daoismsystems Test Prod</h1>
      <p>Connecting you to Ethereum and the Decentralized Web.</p>
      <p>We’re happy to see you.</p>
      {account && <p>{account}</p>}
      <ConnectButton onClick={() => activateBrowserWallet()} disabled={false} />
    </div>
  );
};

export default Home;
