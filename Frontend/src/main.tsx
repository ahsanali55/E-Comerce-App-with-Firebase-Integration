import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { AnimatePresence } from "framer-motion";
import { LoaderProvider } from "./components/pages/Toploader/LoaderContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AnimatePresence mode="wait">
      <Provider store={store}>
        <LoaderProvider>
          <RouterProvider router={router} />
        </LoaderProvider>
      </Provider>
    </AnimatePresence>
  </StrictMode>,
);

