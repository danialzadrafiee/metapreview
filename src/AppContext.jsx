import React, { createContext, useContext, useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
export const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [startFlag, setStartFlag] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [username, setUsername] = useState("");
  const [modalData, setModalData] = useState({});
  const [storyStep, setStoryStep] = useState("S0");
  const [authVisible, setAuthVisible] = useState(true);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupText, setPopupText] = useState("");
  const { address } = useAccount();
  const { open } = useWeb3Modal();
  return (
    <AppContext.Provider
      value={{
        address,
        open,
        startFlag,
        setStartFlag,
        showModal,
        setShowModal,
        showCard,
        setShowCard,
        modalData,
        setModalData,
        storyStep,
        setStoryStep,
        authVisible,
        setAuthVisible,
        popupVisible,
        setPopupVisible,
        popupText,
        setPopupText,
        username,
        setUsername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useAppContext = () => useContext(AppContext);
