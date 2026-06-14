import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store"; // Создадим store на Шаге 2

// Get data from store hook
export const useAppSelector = useSelector.withTypes<RootState>();
// Set data to store hook
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
