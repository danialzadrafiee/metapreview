// src/components/Card/Card.jsx
import { useAppContext } from "../../AppContext";
import Button from "../Button/Button";
import "./Card.scss";
const Card = () => {
  const { showCard, setShowCard } = useAppContext();

  return (
    <>
      <div className='h-screen w-screen overflow-hidden relative z-40 text-white' style={{ display: showCard ? "block" : "none" }}>
        <header className='h-[54vh]  w-full absolute top-0 left-0'>
          <button onClick={() => setShowCard(false)} type='button' className='css_close bg-black opacity-70 hover:opacity-90 absolute cursor-pointer z-10 top-6 right-6 h-10 w-10 flex items-center justify-center'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
          <img src='/story/azadi.png' className='h-[54vh] select-none pointer-events-none absolute top-0 w-full object-cover' />
        </header>
        <footer className='h-[58vh] z-20 absolute w-full bottom-0 left-0'>
          <header className='w-full h-[10vh] backdrop-blur-lg bg-black/90 rounded-t-3xl to-black from-transparent bg-gradient-to-b top-0 absolute z-10'>
            <div className='w-full  h-full flex justify-between font-light items-center px-8'>
              <div className='text-lg'>Tehran</div>
              <div>51.1491 31.4192</div>
            </div>
          </header>
          <section className='bg-black px-8 h-[48vh] w-full flex flex-col gap-4 absolute bottom-0'>
            <h2 className='text-4xl font-medium'>Azadi Tower</h2>
            <div className='grid w-full grid-cols-3'>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-lg text-[#04D2FF]'>GOV</span>
                <span className='text-sm opacity-80'>Type</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-lg text-[#04D2FF]'>129 M</span>
                <span className='text-sm opacity-80'>Size</span>
              </div>
              <div className='flex flex-col gap-1'>
                <span className='font-medium text-lg text-[#04D2FF]'>50</span>
                <span className='text-sm opacity-80'>Level</span>
              </div>
            </div>
            <div className='text-sm font-normal'>hilosophy pious justice pious decieve hatred christianity value noble sea. Eternal-return superiority chaos contradict ultimate will society.</div>
            <Button text='Become a citizen' className={"mt-auto mb-12"} />
          </section>
        </footer>
      </div>
    </>
  );
};

export default Card;
