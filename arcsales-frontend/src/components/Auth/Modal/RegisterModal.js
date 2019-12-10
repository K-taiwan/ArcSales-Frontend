import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './RegisterModal.css';

function RegisterModal(props) {
    const [isShowing, setIsShowing] = useState(false);
    const handleClose = () => setIsShowing(false);
    const handleShow = () => setIsShowing(true);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Register
        </Button>

        <Modal show={isShowing} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>ArcSales-Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container mt-4">
                    <div className="row">
                    <div className="col-m">
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
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password" name="password" value={props.user.password} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password2">Confirm Password</label>
                            <input onChange={props.handleChange} className="form-control form-control-lg" type="password" id="password2" name="password2" value={props.user.password2} />
                        </div>
                        <button id="register-button" onClick={handleClose} className="btn btn-primary" type="submit">Register</button>
                        </form>
                    </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>    
        </>
    );
}

export default RegisterModal;