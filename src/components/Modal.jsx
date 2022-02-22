import React, {useState} from 'react';
import './styles/modal.css';

const Modal = ({open = false, handleClose, children}) => {
    const [isOpen,setIsOpen] = useState(open)

    function closeModal() {
        setIsOpen(false);
        handleClose();
    }

    return (
        <div className={`${isOpen? "block" : "hidden"} modal-container `}>    
            <div className="modal-window">
                <span className="modal-close" onClick={closeModal}>X</span>
                {children}
            </div>            
        </div>
    );
}

export default Modal;
