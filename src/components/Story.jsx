import { step01_goToAzadi } from "@/story/steps/step01_goToAzadi";
import { step02_showModal } from "@/story/steps/step02_showModal";
import { useEffect } from "react";
import { useAppContext } from "../AppContext";

const Story = () => {
  const { setAuthVisible, setShowModal, setModalData, username, setUsername } = useAppContext();
  useEffect(() => {
    window.runStep = (step) => {
      window.story["currentSetp"] = step;
      if (step === 1) {
        step01_goToAzadi(setAuthVisible);
      }
      if (step === 2) {
        step02_showModal({ setShowModal, setModalData, username, setUsername });
      }
      if (step === 3){
        alert('3')
      }
    };
  }, []);
};
export default Story;
