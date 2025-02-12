import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import React, { ReactElement } from "react";
import { ParticipantList } from "./MainContent/ParticipantList/ParticipantList";
import classes from "./App.module.css";
import { Calendar } from "./MainContent/Calendar/Calendar";

export function App(): ReactElement {
  return (
    <>
      <Header />
      <main className={classes.mainContent}>
        <Calendar />
        <ParticipantList />
      </main>
      <Footer />
    </>
  );
}
