import { disconnect } from "@wagmi/core";
import { useAppContext } from "@/AppContext.jsx";
import cn from "classname";

// import { ModelViewerElement } from "@google/model-viewer";
const Authentication = () => {
  const { authVisible } = useAppContext();
  const startButtonHandler = () => {
    window.runStep(1);
  };
  return (
    <div className={cn(!authVisible && "hidden")}>

      <img src='./hero/buttom.svg' className='fixed select-none w-full pointer-events-none left-0 z-5 bottom-0' />
      <img src='./hero/top.svg' className='fixed select-none w-full pointer-events-none left-0 z-5 top-0' />
      <header className='text-white pt-[60px] flex justify-between px-[20px] fixed top-0 left-0 right-0 mx-0 w-full z-10'>
        <div className='grid'>
          <h4 className='text-2xl font-light'>Preview</h4>
          <h2 className='text-4xl font-medium'>Metareal</h2>
        </div>
        <button type='button'>
          <img src='/hero/menu.svg' className='hover:bg-white/10 rounded-full' />
        </button>
      </header>
      <div className='fixed flex flex-col text-white w-[300px] mx-auto left-0 right-0 bottom-36 text-center text-sm font-light z-10'>Hatred prejudice ideal decieve contradict oneself. Convictions free christian marvelous decrepit strong insofar oneself holiest inexpedient superiority</div>
      <div onClick={() => disconnect()} className='fixed bottom-0 text-center h-8 cursor-pointer bg-black w-full z-40 text-white' id='Disconnect'>
        Disconnect
      </div>
      <button type='button' onClick={() => startButtonHandler()} className='fixed bottom-10 z-10 mx-auto rounded-full hover:bg-white/10 w-max left-0 right-0'>
        <img src='/hero/button.svg' className='h-full w-full' />
      </button>
    </div>
  );
};

export default Authentication;
