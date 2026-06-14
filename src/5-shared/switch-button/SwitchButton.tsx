interface SwitchButtonProps {
  // Callback function to swap input values
  onChange: () => void;
}

// Header for Sound Calculus app
const SwitchButton = ({ onChange }: SwitchButtonProps) => (
  <button
    className="flex flex-col justify-around border-0 h-10 w-10 hover:bg-dusty-denim"
    onChange={onChange}
  >
    <span className="text-4xl text-pale-sky">⇄</span>
  </button>
);

export default SwitchButton;
