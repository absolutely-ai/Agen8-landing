import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { MacbookPro } from "./screens/MacbookPro";
import "./index.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3500,
        style: {
          background: '#1a1a1a',
          color: '#fff',
          fontFamily: "'Outfit', sans-serif",
          fontSize: '15px',
          borderRadius: '12px',
          padding: '14px 20px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        },
        success: {
          iconTheme: {
            primary: '#FF6D2F',
            secondary: '#fff',
          },
        },
      }}
    />
    <MacbookPro />
  </StrictMode>,
);
