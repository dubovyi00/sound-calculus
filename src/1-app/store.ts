import { configureStore } from "@reduxjs/toolkit";
import noteConverterReducer from "../3-features/note-converter-slice/noteConverterSlice";

// Main store with subject reducers
export const store = configureStore({
  reducer: {
    noteConverter: noteConverterReducer,
  },
});

// Type for global app state
export type RootState = ReturnType<typeof store.getState>;
// Type for data dispatcher
export type AppDispatch = typeof store.dispatch;
