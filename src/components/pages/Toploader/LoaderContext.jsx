import { createContext, useContext, useRef } from "react";
import LoadingBar from "react-top-loading-bar";

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const ref = useRef(null);

  const start = () => ref.current?.continuousStart();
  const stop = () => ref.current?.complete();

  return (
    <LoaderContext.Provider value={{ start, stop }}>
      <LoadingBar color="#535BF2" height={3} ref={ref} />
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => useContext(LoaderContext);
