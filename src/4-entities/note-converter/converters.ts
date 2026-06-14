import { type MidiNote, createMidiNote } from "./midiNote";
import { type Frequency, createFrequency } from "./frequency";
import {
  type PitchClass,
  type Octave,
  type NoteName,
  pitchClassNames,
  createOctave,
  createNoteName,
  createPitchClass,
  getNoteNameParts,
} from "./note";
import { A4_MIDI_NOTE, A4_FREQUENCY, SEMITONES_COUNT } from "./constants";

// Converter from midi note number to frequency
// (calculating 2^((<input midi note>-<A4 midi note>)/<semitones count = 12>) * <A4 frequency>)
export const midiNoteToFrequency = (midi: MidiNote): Frequency => {
  return createFrequency(
    A4_FREQUENCY * Math.pow(2, (midi - A4_MIDI_NOTE) / SEMITONES_COUNT),
  );
};

// Converter from midi note number to note name
// (concatenating pitch class (from remainder after division by 12)
// and octave)
export const midiNoteToNoteName = (midi: MidiNote): NoteName => {
  const pitchClass: PitchClass = createPitchClass(midi % SEMITONES_COUNT);
  const octave: Octave = createOctave(Math.floor(midi / SEMITONES_COUNT) - 1);
  return createNoteName(pitchClass, octave);
};

// Converter from frequency to midi note number
// (calculating <A4 midi note> + <semitones count = 12>*lb(<input frequency> / <A4 frequency>))
export const frequencyToMidiNote = (frequency: Frequency): MidiNote => {
  const midiFloat: number =
    A4_MIDI_NOTE + SEMITONES_COUNT * Math.log2(frequency / A4_FREQUENCY);
  return createMidiNote(Math.round(midiFloat));
};

// Converter from frequency to midi note (frequency -> midi note -> note name)
export const frequencyToNoteName = (frequency: Frequency): NoteName => {
  const midiNote: MidiNote = frequencyToMidiNote(frequency);
  return midiNoteToNoteName(midiNote);
};

// Converter from note name to midi note (calculating <pitch class number> + ((<octave number> + 1) * <semitones count>))
export const noteNameToMidiNote = (noteName: NoteName): MidiNote => {
  const [pitchClass, octave] = getNoteNameParts(noteName);

  const noteValue = pitchClassNames.indexOf(pitchClass);
  const octave_number: number = parseInt(octave, 10);

  return createMidiNote((octave_number + 1) * SEMITONES_COUNT + noteValue);
};

// Converter from note name to frequency (note name -> midi note -> frequency)
export const noteNameToFrequency = (noteName: NoteName): Frequency => {
  const midiNote = noteNameToMidiNote(noteName);
  return midiNoteToFrequency(midiNote);
};
