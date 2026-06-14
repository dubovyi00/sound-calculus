// BRIEF INFORMATION: notes in MIDI specification are encoded as an integer value
// from 0 (C-1 or double contra-octave note C) to 127 (G9 or six-line octave note G)

// MIDI note value type
export type MidiNote = number & { readonly __brand: "MidiNote" };

// Parse data into valid MIDI note (throw exception if not)
export const createMidiNote = (value: number | string): MidiNote => {
  let midiValue: number;
  if (typeof value === "string") {
    midiValue = parseInt(value, 10);
  } else {
    midiValue = value;
  }

  if (midiValue < 0 || midiValue > 127 || !Number.isInteger(midiValue)) {
    throw new Error(
      `Invalid MIDI number: ${midiValue}. Must be an integer from 0 to 127!`,
    );
  }
  return value as MidiNote;
};
