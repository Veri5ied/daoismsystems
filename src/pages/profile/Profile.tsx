import { useEthers, useEtherBalance } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";
const Profile = () => {
  const { account } = useEthers();
  const STAKING_CONTRACT: string = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
  const userBalance = useEtherBalance(account);
  const stakingBalance = useEtherBalance(STAKING_CONTRACT);

  return (
    <div className="profile">
      <h1>Profile</h1>
      <p>
        <span>Wallet Address:</span> {account}
      </p>
      <p style={{ marginTop: "6px" }}>
        <span>Balance:</span> {userBalance && formatEther(userBalance)} ETH
      </p>
    </div>
  );
};

export default Profile;
