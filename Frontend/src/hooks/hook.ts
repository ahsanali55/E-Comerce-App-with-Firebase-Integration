import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";


// Type dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Type Selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;