import React, { useEffect } from "react";
import { AppProvider } from "@/AppContext";
import Authentication from "@/gui/Authentication/Authentication";
import Modal from "@/components/Modal/Modal";
import Popup from "@/components/Popup/Popup";
import Card from "@/components/Card/Card";
import Story from "@/components/Story";
import CharacterCreator from "./gui/CharacterCreator/CharacterCreator";
const App = () => {
  return (
    <AppProvider>
      <Authentication />
      <Modal />
      <Popup />
      <Card />
      <Story />
      <CharacterCreator />
    </AppProvider>
  );
};

export default App;
