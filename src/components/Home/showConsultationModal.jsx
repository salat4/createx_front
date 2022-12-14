import { useState } from "react";
import Backdrop from "../Backdrop";
import { ConsultationModal } from "./getConsultation";

export const ShowConsultationModal = () => {
  const [modal, setModal] = useState(false);

  const showModal = () => {
    setModal(!modal);
  };

  const onClick = () => {
    setModal(false);
  };

  return (
    <>
      <button
        onClick={showModal}
        type="button"
        className="header-button gradient btn-hover"
      >
        Get consultation
      </button>
      {modal && (
        <Backdrop onClick={showModal}>
          <ConsultationModal onClick={onClick}/>
        </Backdrop>
      )}
    </>
  );
};
