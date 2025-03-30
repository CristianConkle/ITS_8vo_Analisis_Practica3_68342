import "flatpickr/dist/flatpickr.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "simplebar-react/dist/simplebar.min.css";
import "swiper/swiper-bundle.css";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./index.css";
import { AppWrapper } from "./ui/components/common/PageMeta.tsx";
import { BrowserRouter } from "react-router-dom"; // ✅ agrega esto

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <AppWrapper>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AppWrapper>
    </ThemeProvider>
  </StrictMode>
);
