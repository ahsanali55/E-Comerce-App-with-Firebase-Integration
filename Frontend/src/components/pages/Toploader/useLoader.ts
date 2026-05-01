import { useContext } from "react";
import { LoaderContext } from "./loaderContextValue";

export const useLoader = () => useContext(LoaderContext);
