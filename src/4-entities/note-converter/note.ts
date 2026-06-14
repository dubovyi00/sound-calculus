// BRIEF INFORMATION: Chromatic scale note naming conventions of English language: are letter (from A to G)
// + flat/sharp sign (if the semitone from the base note requires such notation) + octave number

export const pitchClassNames: string[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
] as const;

// TODO! Flat symbol support

// Pitch class letter type
export type PitchClass = (typeof pitchClassNames)[number];

// Octave number type
export type Octave = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Note name type
export type NoteName = `${PitchClass}${Octave}`;

type createNoteNameOverload = {
  (param1: string): void;
  (param1: PitchClass, param2: Octave): void;
};

// Check if a number is a valid octave
export const isOctave = (value: number): value is Octave => {
  return Number.isInteger(value) && value >= -1 && value <= 9;
};

// Parse data into valid octave value (throw exception if not)
export const createOctave = (value: number | string): Octave => {
  let octaveValue: number;
  if (typeof value === "string") {
    octaveValue = parseInt(value, 10);
  } else {
    octaveValue = value;
  }

  if (!isOctave(octaveValue)) {
    throw new Error(
      `Invalid octave: ${octaveValue}. Must be an integer from -1 to 9!`,
    );
  }
  return octaveValue as Octave;
};

// Parse data into valid pitch class value from number or string (throw exception if not)
export const createPitchClass = (value: number | string): PitchClass => {
  if (typeof value === "number") {
    if (value > 12 || value < 0) {
      throw new Error(
        `Invalid pitch class number: ${value}. Must be an integer from 0 to 12!`,
      );
    }
    return pitchClassNames[value];
  } else {
    if (!pitchClassNames.includes(value)) {
      throw new Error(
        `Invalid pitch class literal: ${value}. Must be on of this: ${pitchClassNames}!`,
      );
    }
    return pitchClassNames[value];
  }
};

// Parse string into valid note name data (throw exception if not) or concatenate pitch class and octave names
export const createNoteName: createNoteNameOverload = (
  param1: string | PitchClass,
  param2?: Octave,
): NoteName => {
  // Parse data into valid note name value (throw exception if not)
  if (param2 === undefined) {
    // If we can't divide param1 into valid pitch class and octave as valid note name, then param1
    // is not valid note name
    // TODO! Maybe refactor try-except for getNoteNameParts and this part for displaying it on screen and
    // better code quality
    if (getNoteNameParts(param1)) return param1 as NoteName;
  }
  // Build a note name from pitch class name and octave number
  else return `${param1}${param2}` as NoteName;
};

export const getNoteNameParts = (
  noteName: string | NoteName,
): [PitchClass, Octave] => {
  // This regular expression attempts to match a construct consisting of
  // elements as specified in the BRIEF INFORMATION for this entity.
  const match = noteName.match(/^([A-G][#b]?)(-?\d+)$/);
  if (!match) {
    throw new Error(
      `Invalid note name: ${noteName}. Must be a combination of a letter, 
          an integer (from -1 to 9), and optional flats/sharps (e.g. C-1, D#2, Eb3, A4)!`,
    );
  } else {
    if (!isOctave(parseInt(match[2], 10)))
      throw new Error(
        `Invalid octave number: ${match[2]}. Must be from -1 to 9!`,
      );
  }
  return [createPitchClass(match[1]), createOctave(match[2])];
};
