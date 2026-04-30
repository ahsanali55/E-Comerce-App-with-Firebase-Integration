import { createContext } from "react";

export interface LoaderContextValue {
  start: () => void;
  stop: () => void;
}

export const LoaderContext = createContext<LoaderContextValue>({
  start: () => {},
  stop: () => {},
});
