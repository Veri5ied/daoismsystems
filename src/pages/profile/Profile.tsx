import { useEthers, useEtherBalance, Rinkeby } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
const Profile = () => {
  const { account } = useEthers();
  const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId });

  return (
    <div>
      <h1>Profile</h1>
      <p>Wallet Address: {account}</p>
      <p>Balance: {rinkebyBalance && formatEther(rinkebyBalance)} ETH</p>
    </div>
  );
};

export default Profile;
