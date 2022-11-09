import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
const Profile = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  return (
    <div>
      <h1>Profile</h1>
      <p>Wallet Address: {account}</p>
      <p>
        Balance:{" "}
        {etherBalance ? parseFloat(formatEther(etherBalance)).toFixed(5) : 0}{" "}
        ETH
      </p>
    </div>
  );
};

export default Profile;
