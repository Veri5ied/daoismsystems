interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  buttonText: string;
}

const ConnectButton = ({ onClick, disabled, buttonText }: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonText}
    </button>
  );
};

export default ConnectButton;
