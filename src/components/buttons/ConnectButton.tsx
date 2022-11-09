interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const ConnectButton = ({ onClick, disabled }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      Connect Wallet
    </button>
  );
};

export default ConnectButton;
