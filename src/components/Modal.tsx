import React, { DialogHTMLAttributes, FC, forwardRef, useEffect, useRef } from "react";

interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  children: React.ReactNode;
  isActive: boolean;
}

const Modal: FC<ModalProps> = ({ isActive, onClick, children, ...props }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialog = dialogRef.current;

  useEffect(() => {
    if (!!isActive) {
      document.querySelector("html")?.classList.add("overflow-hidden");
      dialog?.showModal();
    } else {
      document.querySelector("html")?.classList.remove("overflow-hidden");
      dialog?.close();
    }
  }, [isActive]);

  return (
    <dialog
      ref={dialogRef}
      onClick={(ev) => {
        const dialogDimensions = dialog?.getBoundingClientRect();
        if (ev.clientX < dialogDimensions!.left || ev.clientX > dialogDimensions!.right || ev.clientY < dialogDimensions!.top || ev.clientY > dialogDimensions!.bottom) {
          dialog?.close();
        }

        onClick?.(ev);
      }}
      {...props}
    >
      {children}
    </dialog>
  );
};

export default Modal;
