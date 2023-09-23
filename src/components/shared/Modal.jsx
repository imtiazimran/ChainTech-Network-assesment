import React from 'react';

const Modal = ({ children, isOpen, onCancel }) => {

    if (isOpen) {
        document.getElementById('my_modal_3').showModal()
    }
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    {children}
                    <button onClick={onCancel} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;