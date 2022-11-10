import ConnectButton from "../../components/buttons/ConnectButton";
import { useEffect } from "react";
import { useSendTransaction } from "@usedapp/core";
import { useState } from "react";
import { utils } from "ethers";
import { useToasts } from "react-toast-notifications";

const Transfer = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState<any>(1);
  const [isOk, setIsOk] = useState(false);
  const { addToast } = useToasts();
  const { sendTransaction, state } = useSendTransaction({
    transactionName: "Send Ethereum",
  });

  const sendToken = () => {
    if (!address) {
      addToast("Please enter an address", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    } else {
      void sendTransaction({ to: address, value: utils.parseEther(amount) });
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
          <p style={{ color: "green" }}>
            {isOk && "Transaction is successful"}
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
