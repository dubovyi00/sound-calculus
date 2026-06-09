import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // <-- Импортируем Provider
import { store } from "./1-app/store"; // <-- Импортируем наш store
import "./index.css";
import App from "./1-app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
