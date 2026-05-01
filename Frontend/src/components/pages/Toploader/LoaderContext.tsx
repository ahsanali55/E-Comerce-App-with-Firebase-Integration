import { type ReactNode, useCallback, useRef } from "react";
import LoadingBar, { type LoadingBarRef } from "react-top-loading-bar";
import { LoaderContext } from "./loaderContextValue";

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef<LoadingBarRef>(null);

  const start = useCallback(() => ref.current?.continuousStart(), []);
  const stop = useCallback(() => ref.current?.complete(), []);

  return (
    <LoaderContext.Provider value={{ start, stop }}>
      <LoadingBar color="#535BF2" height={3} ref={ref} />
      {children}
    </LoaderContext.Provider>
  );
};

