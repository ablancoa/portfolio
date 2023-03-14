import { useState } from "react";

const useInitialState = () => {
  const [modal, setModal] = useState(false);
  const [item, setItem] = useState('');

  const setOpenModal = () => {
    setModal(!modal)
  }

  return {
    modal,
    setOpenModal,
    item,
    setItem
  }
}

export default useInitialState;