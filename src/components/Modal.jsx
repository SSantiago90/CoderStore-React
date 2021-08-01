import React, {useState} from 'react';
import './styles/modal.css';

const Modal = ({open = false,children}) => {
    const [isOpen,setIsOpen] = useState(open)

    const ToggleModal = () => setIsOpen(!isOpen);
    const handleClose = ()=> setIsOpen(false);

    return (
        <div className={`${isOpen? "block" : "hidden"} modal-container `}>    
            <div className="modal-window">
                <span className="modal-close" onClick={handleClose}>X</span>
                {children}
            </div>            
        </div>
    );
}

export default Modal;
