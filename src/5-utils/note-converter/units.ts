import type { UnitOption } from "../../4-shared/unit-option/UnitOption";

export const PITCH_UNITS: UnitOption[] = [
  { value: "hz", label: "Frequency (Hz)" },
  { value: "note", label: "Note" },
  { value: "midi", label: "MIDI number" },
];

export type PitchUnit = (typeof PITCH_UNITS)[number]["value"];
