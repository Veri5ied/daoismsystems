import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useEthers } from "@usedapp/core";

import ConnectButton from "../../components/buttons/ConnectButton";

const Home = () => {
  const { activateBrowserWallet, account } = useEthers();
  const navigate = useNavigate();

  useEffect(() => {
    if (account) {
      navigate("/profile");
    }
  }, [account, navigate]);

  return (
    <div className="home_container">
      <h1 className="glitch">Welcome to Daoismsystems Test Prod</h1>
      <p>Connecting you to Ethereum and the Decentralized Web.</p>
      <p>We’re happy to see you.</p>
      <ConnectButton
        onClick={activateBrowserWallet}
        disabled={false}
        buttonText="Connect Wallet"
      />
    </div>
  );
};

export default Home;
