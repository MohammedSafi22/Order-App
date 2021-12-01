import './Modal.css';
import ReactDOM from 'react-dom';
import React from 'react';

const Backdrop = props => {
    return(
        <div className="backdrop" onClick={props.onClose}>
        </div>
    );
};
const ModalOverLay = props => {
    return(
        <div className="modal">
            <div className="content">{props.children}</div>
        </div>
    )
};
const PortalElement = document.getElementById('overlays');
const Modal = props => {
    return (
        <div>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />,PortalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,PortalElement)}
        </div>
    )
}
export default Modal;