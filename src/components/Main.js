import React from "react";
import OutdoorTemperature from "./OutdoorTemperature";
import { ModalProvider } from "../contexts/ModalContext";
import ModalButton from "./ModalButton";
import Modal from "./Modal";

const Main = (props) => {
  return (
    <main className="container" {...props}>
      <OutdoorTemperature></OutdoorTemperature>
      <br/>
      <p>Switch color schemes and open modals with React.</p>
      <ModalProvider>
        <ModalButton>Open Modal</ModalButton>
        <Modal />
      </ModalProvider>
    </main>
  );
};

export default Main;
