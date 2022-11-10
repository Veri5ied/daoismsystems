import ConnectButton from "../../components/buttons/ConnectButton";
import { useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useState } from "react";
import { utils, BigNumber } from "ethers";
import { formatEther } from "@ethersproject/units";

const formatter = new Intl.NumberFormat("en-us", {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
});
const formatBalance = (balance: BigNumber | undefined) =>
  formatter.format(parseFloat(formatEther(balance ?? BigNumber.from("0"))));

const Transfer = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState<any>(1);
  const { sendTransaction, state } = useSendTransaction({
    transactionName: "Send Ethereum",
  });

  const sendToken = () => {
    void sendTransaction({ to: address, value: utils.parseEther(amount) });
  };

  useEffect(() => {
    if (state.status !== "Mining") {
      setAmount("0");
      setAddress("");
    }
  }, [state]);

  return (
    <div>
      <h1>Transfer</h1>
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
          <div className="general-component__form__input">
            <ConnectButton
              buttonText="Send Token"
              disabled={false}
              onClick={() => sendToken()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
