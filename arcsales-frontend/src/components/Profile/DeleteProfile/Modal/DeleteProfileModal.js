import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './DeleteModal.css';

function DeleteModal(props) {
    const [isShowing, setIsShowing] = useState(false);
    const handleClose = () => setIsShowing(false);
    const handleShow = () => setIsShowing(true);

    return (
        <>
        <Button variant="warning" onClick={handleShow}>
            Delete
        </Button>

        <Modal show={isShowing} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ArcSales-Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container mt-4">
                <div className="row">
                <div className="col">
                    <form onSubmit={props.handleSubmit}>
                        <p>Are you sure?</p>
                        <p>You will not be able to recover your account!</p>
                    <button id="login-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">Delete Account</button>
                    </form>
                </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default DeleteModal;
