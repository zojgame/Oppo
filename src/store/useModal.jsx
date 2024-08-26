import { create } from "zustand";

const useModal = create((set) => ({
  modal: null,
  setModal: (modal) => set(() => ({ modal: modal })),
}));

export default useModal;