import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <BrowserRouter basename="/navani25-luxe-visual-studio-main">
      <App />
    </BrowserRouter>
  );
}
