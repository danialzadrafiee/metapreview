// src/components/Modal/Modal.jsx
import React, { useState } from "react";
import cn from "classname";
import Button from "../Button/Button";
import { useAppContext } from "../../AppContext";
const Modal = () => {
  const { showModal, modalData, setShowModal, setStoryStep } = useAppContext();
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={cn(showModal == true ? "fixed" : "hidden", " top-0 left-0 w-screen h-screen bg-gray-900/90 flex items-center  justify-center z-40")}>
        <div className={cn("flex flex-col gap-4 text-white bg-[#141718] rounded-xl w-[362px] h-max py-6 px-4")}>
          <header className='flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>{modalData.title ?? "Message"}</h2>
            <button className='text-2xl bg-[#2A2D2F] rounded-full w-[40px] h-[40px] flex items-center justify-center hover:bg-[#333638] text-white/80 font-bold'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
          </header>
          <div className='flex flex-col gap-4'>
            {modalData.image ? <img src={modalData.image} className='w-full h-48  object-cover rounded-xl' /> : null}
            {modalData.text ? <p className='text-sm'>{modalData.text}</p> : null}
            {modalData.html ? <div>{modalData.html}</div> : null}

            <Button text={modalData.buttonText ?? "Continue"} onClick={modalData.onClick ? modalData.onClick : closeModal}></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
