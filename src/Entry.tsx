import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Header } from "./Header";
import { Main } from "./MainContent";
import { Footer } from "./Footer";

createRoot(document.body).render(
  <StrictMode>
    <Header />
    <Main />
    <Footer />
  </StrictMode>,
);
