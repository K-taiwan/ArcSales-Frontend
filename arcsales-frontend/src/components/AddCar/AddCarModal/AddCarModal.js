import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import './AddCarModal.css';

function AddCarModal(props) {
    const [isShowing, setIsShowing] = useState(false);
    const handleClose = () => setIsShowing(false);
    const handleShow = () => setIsShowing(true);

    return (
        <>
        <Button variant="secondary" onClick={handleShow}>
            AddCar
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
                        <label htmlFor="model">Model</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="Model" name="model" value={props.car.model} />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="brand">Brand</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="Brand" name="brand" value={props.car.brand} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="number" id="Year" name="year" value={props.car.year} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="seats">Seats</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="number" id="Seats" name="seats" value={props.car.seats} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="new">New</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="checkbox" id="New" name="new" value={props.car.new} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="number" id="Price" name="price" value={props.car.price} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="color">Color</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="text" id="Color" name="color" value={props.car.color} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input onChange={props.handleChange} className="form-control form-control-lg" type="file" id="Image" name="image" accept="image/png, image/jpeg" value={props.car.image} />
                    </div> */}
                    <button id="login-button" onClick={handleClose} className="btn btn-primary float-right" type="submit">AddCar</button>
                    </form>
                </div>
                </div>
            </div>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default AddCarModal;