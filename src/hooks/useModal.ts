import { useState } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (value?: boolean) => {
    setIsOpen(value ?? !isOpen);
  };
  return [isOpen, toggle] as const;
};

export default useModal;
