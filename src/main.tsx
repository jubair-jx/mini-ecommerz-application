import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "sonner";
import App from "./App.tsx";
import "./index.css";
import store, { persistor } from "./redux/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <Toaster richColors position="top-center" />
        <App />{" "}
      </PersistGate>
    </Provider>
  </StrictMode>
);
