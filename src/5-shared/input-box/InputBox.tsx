interface InputBoxProps {
  value: string;
  onChange: (value: string) => void;
  id?: string;
}

// Base component for text input
const InputBox = ({ value, onChange, id }: InputBoxProps) => (
  <input
    className={`flex bg-pale-sky w-40 h-20`}
    id={id}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  ></input>
);

export default InputBox;
