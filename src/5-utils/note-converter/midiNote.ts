// Midi note value type (0-127)
export type MidiNote = number & { readonly __brand: "MidiNote" };

// Parse data into valid midi note (throw exception if not)
export const create = (value: number | string): MidiNote => {
  let midiValue: number | string = value;
  if (typeof value === "string") {
    midiValue = parseInt(value, 10);
  }

  if (midiValue < 0 || midiValue > 127 || !Number.isInteger(midiValue)) {
    throw new Error(`Invalid MIDI number: ${midiValue}`);
  }
  return value as MidiNote;
};
