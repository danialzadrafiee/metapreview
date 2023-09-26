import { azadiModel } from "@/models/azadi";

export const step02_showModal = ({ setShowModal, setModalData, username, setUsername }) => {
  const htmlData = () => {
    return (
      <>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>What we should call you?</span>
          </label>
          <input
            onChange={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
            type='text'
            placeholder='Heisenberg'
            className='input input-bordered w-full'
          />
        </div>
      </>
    );
  };

  const modalDataItem01 = {
    title: "welcome",
    image: "story/01-welcome.png",
    text: "joy pious morality salvation moral faithful mountains. Passion of holiest war philosophy society zarathustra play mountains merciful. Ultimate zarathustra evil love deceptions enlightenment madness. Selfish horror free ideal salvation virtues good free ocean moral right. Right pious society horror insofar holiest inexpedient aversion.",
    onClick: setModalData(false),
  };
  const modalDataItem02 = {
    title: "createContext",
    text: "You can change your name and avatar at any time.",
    buttonText: "Create your appearance",
    html: htmlData(),
    onClick: () => {
      setShowModal(false);
      runStep(3);
    },
  };
  setModalData(modalDataItem01);
  setShowModal(true);
  azadiModel.animateModel();
  azadiModel.setClickHandler(() => {
    setModalData(modalDataItem02);
    setShowModal(true);
  });
};
