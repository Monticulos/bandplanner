import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
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
