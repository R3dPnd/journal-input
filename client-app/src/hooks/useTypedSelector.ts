import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../components/state/reducers/index.";

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;