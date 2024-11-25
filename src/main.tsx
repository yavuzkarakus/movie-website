import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { GenresProvider } from "./context/genres.context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GenresProvider>
        <App />
      </GenresProvider>
    </BrowserRouter>
  </StrictMode>
);
