import React, { ReactNode } from "react";

type Props = {
  onClose: () => void;
  headline: ReactNode;
};

function Modal(props: Props) {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex flex-column justify-center items-center h-screen">
        <div className="fixed inset-0 transition-opacity">
          <div
            className="absolute inset-0 bg-gray-500 opacity-75"
            onClick={props.onClose}
          />
        </div>
        <div
          className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="text-center sm:mt-0 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-headline"
              >
                {props.headline}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
