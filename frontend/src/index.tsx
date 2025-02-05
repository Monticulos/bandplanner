import "./index.css";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./app/Header/Header.tsx";
import { Footer } from "./app/Footer/Footer.tsx";
import { MainContent } from "./app/MainContent/MainContent.tsx";

const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </StrictMode>,
);
