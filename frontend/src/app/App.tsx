import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import { Footer } from "./Footer/Footer";
import React, { ReactElement } from "react";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
