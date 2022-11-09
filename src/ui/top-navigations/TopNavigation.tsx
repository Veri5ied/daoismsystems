import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import ConnectButton from "../../components/buttons/ConnectButton";

const TopNavigation = () => {
  const { deactivate, account } = useEthers();

  useEffect(() => {
    if (!account) {
      window.location.replace("/");
    }
  }, [account]);

  return (
    <div className="top-navigation__container">
      <div className="top-navigation__logo">
        <ConnectButton
          onClick={deactivate}
          disabled={false}
          buttonText="Disconnect Wallet"
        />
      </div>
      <div className="top-navigation__links">
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/transfer">Transfer</NavLink>
        <NavLink to="/mint">Mint</NavLink>
      </div>
    </div>
  );
};

export default TopNavigation;
