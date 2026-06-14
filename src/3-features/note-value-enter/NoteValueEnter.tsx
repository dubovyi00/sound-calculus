import InputBox from "../../5-shared/input-box/InputBox";
import type { PitchUnit } from "../../4-entities/note-converter/units";

interface NoteUnitSelectProps {
  // Measurement unit value
  value: PitchUnit;

  // Callback function for measurement unit change
  onChange: (value: PitchUnit) => void;

  // ID of element
  id: string;
}

// Component for pitch measurement unit selecting
const NoteValueEnter = ({ value, onChange, id }: NoteUnitSelectProps) => (
  <InputBox value={value} onChange={onChange} id={id} />
);

export default NoteValueEnter;
