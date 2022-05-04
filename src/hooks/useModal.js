import { useState } from 'react';

function useModal() {
  const [modal, setModal] = useState(false);

  function showModal() {
    setModal(true);
  }

  function hideModal() {
    setModal(false);
  }

  return {
    state: modal,
    show: showModal,
    hide: hideModal,
  };
}

export default useModal;
