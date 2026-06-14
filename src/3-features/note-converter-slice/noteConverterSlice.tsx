import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PitchUnit } from "../../4-entities/note-converter/units";

interface NoteConverterState {
  // Value to convert
  inputValue: string;

  // Measurement unit of input value
  inputUnit: PitchUnit;

  // Converted vale
  outputValue: string;

  // Measurement unit of output value
  outputUnit: PitchUnit;
}

const initialState: NoteConverterState = {
  inputValue: "440",
  inputUnit: "hz",
  outputValue: "A4",
  outputUnit: "note",
};

// Slice for note converter data
export const noteConverterSlice = createSlice({
  name: "noteConverter",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
    setInputUnit: (state, action: PayloadAction<PitchUnit>) => {
      state.inputUnit = action.payload;
    },
    setOutputValue: (state, action: PayloadAction<string>) => {
      state.outputValue = action.payload;
    },
    setOutputUnit: (state, action: PayloadAction<PitchUnit>) => {
      state.outputUnit = action.payload;
    },
    resetConverter: () => {
      return initialState;
    },
  },
});

export const {
  setInputValue,
  setInputUnit,
  setOutputValue,
  setOutputUnit,
  resetConverter,
} = noteConverterSlice.actions;
export default noteConverterSlice.reducer; // must be imported as noteConverterReducer
