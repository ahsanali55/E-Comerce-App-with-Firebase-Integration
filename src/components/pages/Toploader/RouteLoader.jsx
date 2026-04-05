import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoader } from "./LoaderContext";

const RouteLoader = () => {
  const location = useLocation();
  const { start, stop } = useLoader();

  useEffect(() => {
    start();
    const timer = setTimeout(stop, 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
};

export default RouteLoader;
