import { step01_goToAzadi } from "@/story/steps/step01_goToAzadi";
import { step02_showModal } from "@/story/steps/step02_showModal";
import { step03_createAvatar } from "@/story/steps/step03_createAvatar";
import { step04_getRevard } from "@/story/steps/step04_getRevard";
import { useEffect } from "react";
import { useAppContext } from "../AppContext";

const Story = () => {
  const { setAuthVisible, setShowModal, setModalData, username, setUsername, setAvatarCreatorShow } = useAppContext();
  useEffect(() => {
    window.runStep = (step) => {
      window.story["currentSetp"] = step;
      if (step === 1) {
        step01_goToAzadi(setAuthVisible);
      }
      if (step === 2) {
        step02_showModal({ setShowModal, setModalData, username, setUsername });
      }
      if (step === 3) {
        step03_createAvatar({ setAvatarCreatorShow });
      }
      if (step === 4) {
        step04_getRevard({ setAuthVisible });
      }
    };
  }, []);
};
export default Story;
