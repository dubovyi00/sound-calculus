import { type MidiNote, createMidiNote } from "./midiNote";
import { type Frequency, createFrequency } from "./frequency";
import {
  type PitchClass,
  type Octave,
  type NoteName,
  createOctave,
  createNoteName,
} from "./note";
import { A4_MIDI_NOTE, A4_FREQUENCY, SEMITONES_COUNT } from "./constants";

export const midiNoteToFrequency = (midi: MidiNote): Frequency => {
  return createFrequency(
    A4_FREQUENCY * Math.pow(2, (midi - A4_MIDI_NOTE) / SEMITONES_COUNT),
  );
};

export const midiNoteToNoteName = (midi: MidiNote): NoteName => {
  // const noteNames: NoteName[] = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const pitchClass: PitchClass = createNoteName(midi % SEMITONES_COUNT); // TODO!
  const octave: Octave = createOctave(Math.floor(midi / SEMITONES_COUNT) - 1);
  return createNoteName(pitchClass, octave);
  //return `${noteNames[midi % SEMITONES_COUNT]}${octave}` as FullNoteName;
};

export const frequencyToMidiNote = (frequency: Frequency): MidiNote => {
  const midiFloat = 69 + 12 * Math.log2(frequency / 440);
  return createMidiNote(Math.round(midiFloat));
};

export const frequencyToNoteName = (frequency: Frequency): NoteName => {
  return createNoteName(frequency); // TODO!!
};

export const noteNameToMidiNote = (noteName: NoteName): MidiNote => {
  return createMidiNote(noteName); // TODO!!
};

export const noteNameToFrequency = (noteName: NoteName): Frequency => {
  return createFrequency(noteName); // TODO!!
};
