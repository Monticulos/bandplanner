import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./Header/Header.tsx";
import { Footer } from "./Footer/Footer.tsx";
import { MainContent } from "./MainContent/MainContent.tsx";

createRoot(document.body).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
);
