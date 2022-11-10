import ConnectButton from "../../components/buttons/ConnectButton";
import { useContractFunction } from "@usedapp/core";

const Mint = () => {
  return (
    <div>
      <h1>Mint</h1>
      <div className="general-component">
        <div className="general-component__form">
          <div className="general-component__form__input">
            <label htmlFor="recipient">Recipient</label>
            <input type="text" id="recipient" />
          </div>
          <div className="general-component__form__input">
            <label htmlFor="amount">Amount</label>
            <input type="text" id="amount" />
          </div>
          <div className="general-component__form__input">
            <ConnectButton
              buttonText="Generate Token"
              disabled={false}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
