import { useState } from 'react';

// Creates a state and functions to hide and show the Modals Components
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
