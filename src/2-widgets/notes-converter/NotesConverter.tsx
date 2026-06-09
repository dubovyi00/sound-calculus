import { useAppDispatch, useAppSelector } from "../../1-app/hooks";
import {
  setInputValue,
  setInputUnit,
  setOutputValue,
  setOutputUnit,
} from "../../3-features/note-converter-slice/noteConverterSlice";
import InputBox from "../../4-shared/input-box/InputBox";
import NoteUnitSelect from "../../3-features/note-unit-select/NoteUnitSelect";
import WidgetName from "../../4-shared/widget-name/WidgetName";

// Notes converter widget
const NotesConverter = () => {
  const dispatch = useAppDispatch();

  const { inputValue, inputUnit, outputValue, outputUnit } = useAppSelector(
    (state) => state.noteConverter,
  );

  return (
    <div className="flex flex-col justify-around ml-3 mt-3 w-120 h-75 border-2 border-pale-sky">
      <WidgetName label={"Notes converter"} />
      <div className="flex flex-row justify-around h-50">
        <div className="flex flex-col justify-around">
          <NoteUnitSelect
            value={inputUnit}
            onChange={(val) => dispatch(setInputUnit(val))}
            id={"input-unit-select"}
          />
          <InputBox
            value={inputValue}
            onChange={(val) => dispatch(setInputValue(val))}
            id={"input-value-enter"}
          />
        </div>
        <div className="flex flex-col justify-around">
          <span className="text-4xl text-pale-sky">⇄</span>
        </div>
        <div className="flex flex-col justify-around">
          <NoteUnitSelect
            value={outputUnit}
            onChange={(val) => dispatch(setOutputUnit(val))}
            id={"output-unit-select"}
          />
          <InputBox
            value={outputValue}
            onChange={(val) => dispatch(setOutputValue(val))}
            id={"output-value-enter"}
          />
        </div>
      </div>
    </div>
  );
};

export default NotesConverter;
