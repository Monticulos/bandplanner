import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/Header.tsx";
import { Footer } from "./components/Footer/Footer.tsx";
import { MainContent } from "./components/MainContent/MainContent.tsx";

createRoot(document.body).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
);
