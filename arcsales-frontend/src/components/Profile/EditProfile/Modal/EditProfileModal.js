import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './EditModal.css';

function EditModal(props) {
    const [isShowing, setIsShowing] = useState(false);
    const handleClose = () => setIsShowing(false);
    const handleShow = () => setIsShowing(true);

    return (
        <>
        <Button variant="info" onClick={handleShow}>
            Edit
        </Button>

        <Modal show={isShowing} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ArcSales-Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container mt-4">
                <div className="row">
                <div className="col">
                    <form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="firstName" name="firstName" value={props.user.firstName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="lastName" name="lastName" value={props.user.lastName} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="email" id="email" name="email" value={props.user.email} />
                    </div>
                    <button id="login-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">Edit</button>
                    </form>
                </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default EditModal;
