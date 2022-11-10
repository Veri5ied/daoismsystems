import { useState, useEffect } from "react";
import ConnectButton from "../../components/buttons/ConnectButton";
import { ethers } from "ethers";
import { useContractFunction } from "@usedapp/core";
import { Contract } from "@ethersproject/contracts";
import WAFFLETOKEN_ABI from "../../utils/waffle-token.abi.json";
import { useToasts } from "react-toast-notifications";

const contractInt = new ethers.utils.Interface(WAFFLETOKEN_ABI);
const contract = new Contract(
  "0x9ed2135850920ba65566d010b947b49e88651675",
  contractInt
);
const Mint = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState<any>(1);
  const [isOk, setIsOk] = useState(false);
  const { addToast } = useToasts();
  const { state, send } = useContractFunction(contract, "mint", {
    receiver: address,
    amount: amount,
  } as any);

  const mintToken = () => {
    if (!address) {
      addToast("Please enter an address", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else {
      void send(address, ethers.utils.parseEther(String(amount)));
    }
  };

  useEffect(() => {
    if (state.status !== "Mining") {
      setAmount("0");
      setAddress("");
      setIsOk(false);
    } else {
      setIsOk(true);
      addToast("Transaction Successful", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  }, [state]);

  console.log(state);
  return (
    <div>
      <h1>Mint</h1>
      <div className="general-component">
        <div className="general-component__form">
          <div className="general-component__form__input">
            <label htmlFor="recipient">Recipient</label>
            <input
              type="text"
              id="recipient"
              value={address}
              onChange={(e) => setAddress(e.currentTarget.value)}
            />
          </div>
          <div className="general-component__form__input">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              min={0}
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
          </div>
          <p style={{ color: "red" }}>
            {state.errorMessage && state.errorMessage}
          </p>
          <p style={{ color: "green" }}>
            {isOk && "Transaction is successful"}
          </p>
          <div className="general-component__form__input">
            <ConnectButton
              buttonText="Generate Token"
              disabled={false}
              onClick={() => mintToken()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
