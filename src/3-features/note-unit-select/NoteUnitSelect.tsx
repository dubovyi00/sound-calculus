import DropdownList from "../../4-shared/dropdown-list/DropdownList";
import type { PitchUnit } from "../../5-utils/note-converter/units";
import { PITCH_UNITS } from "../../5-utils/note-converter/units";

interface NoteUnitSelectProps {
  // Measurement unit value
  value: PitchUnit;

  // Callback function for measurement unit change
  onChange: (value: PitchUnit) => void;

  // ID of element
  id: string;
}

// Component for pitch measurement unit selecting
const NoteUnitSelect = ({ value, onChange, id }: NoteUnitSelectProps) => (
  <DropdownList
    options={PITCH_UNITS}
    value={value}
    onChange={onChange}
    id={id}
  />
);

export default NoteUnitSelect;
