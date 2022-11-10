import ConnectButton from "../../components/buttons/ConnectButton";

const Transfer = () => {
  return (
    <div>
      <h1>Transfer</h1>
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
              buttonText="Send Token"
              disabled={false}
              onClick={() => console.log("clicked")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
