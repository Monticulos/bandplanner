import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import React, { ReactElement } from "react";
import { Sidebar } from "./Sidebar/Sidebar";
import classes from "./App.module.css";
import { Calendar } from "./Calendar/Calendar";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <main className={classes.mainContent}>
        <Calendar />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}
