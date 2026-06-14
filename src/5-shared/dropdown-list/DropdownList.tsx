interface DropdownListProps<T extends { value: string; label: string }> {
  options: T[];
  value: T["value"];
  onChange: (value: T["value"]) => void;
  id?: string;
}

// UI component for dropdown list input with select options
const DropdownList = <T extends { value: string; label: string }>({
  options,
  value,
  onChange,
  id,
}: DropdownListProps<T>) => (
  <select
    id={id}
    value={value}
    onChange={(e) => onChange(e.target.value as T["value"])}
    className={`flex bg-pale-sky w-40 h-10`}
  >
    {options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
);

export default DropdownList;
