// src/components/Popup/Popup.jsx
import React from "react";
import cn from "classname";
import { useAppContext } from "../../AppContext";
const Popup = () => {
  const { popupVisible, setPopupVisible, popupText, setPopupText } = useAppContext();
  return (
    <>
      <div className={cn("fixed h-[300px] z-[40] bg-gradient-to-t from-black/80 to-transparent w-full bottom-0 left-0", popupVisible ? "flex" : "hidden")}>
        <div className='absolute w-[390px]  h-[274px] left-0 bottom-0'>
          <img className='absolute' src='/story/popup.png' />
          <div className='absolute text-[#4C4E59] top-[18px] font-semibold h-[120px] w-[230px] px-4 flex items-center justify-center text-center right-[25px]'>{popupText}</div>
        </div>
      </div>
    </>
  );
};

export default Popup;
