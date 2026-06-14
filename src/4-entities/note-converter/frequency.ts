// BRIEF INFORMATION: frequency is a physical quantity equal to the number of sound vibrations per second
// that determines the pitch

// Frequency of note type
export type Frequency = number & { readonly __brand: "Frequency" };

// Parse data into valid frequency value (throw exception if not)
export const createFrequency = (value: number | string): Frequency => {
  let freqValue: number;
  if (typeof value === "string") {
    freqValue = parseFloat(value);
  } else {
    freqValue = value;
  }

  if (freqValue <= 0 || !Number.isFinite(freqValue)) {
    throw new Error(
      `Invalid frequency: ${freqValue}. Must be a positive number!`,
    );
  }
  return value as Frequency;
};
