import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default class ShowCar extends Component {
    
    render() {
        
        return(
            <>
            

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                <li>
                    Brand = {this.props.data.brand}
                    <br/>
                    Model = {this.props.data.model}
                    <br/>
                    Year = {this.props.data.year}
                    <br/>
                    Price = ${this.props.data.price}
                    <br/>
                    Color = {this.props.data.color}
                    <br/>
                    <img className="car-img" src="http://clipart-library.com/images_k/silhouette-of-a-car/silhouette-of-a-car-7.jpg" alt="cars" width="300"/>
                </li>
                <hr className="hr1"/>
            </Card.Text>
            <Button variant="primary">Delete</Button>
            </Card.Body>
            </Card>
            </>
        )
    }
}

{/* <div>
                <li>
                    Brand = {this.props.data.brand}
                    <br/>
                    Model = {this.props.data.model}
                    <br/>
                    Year = {this.props.data.year}
                    <br/>
                    Price = ${this.props.data.price}
                    <br/>
                    Color = {this.props.data.color}
                    <br/>
                    <img className="car-img" src="http://clipart-library.com/images_k/silhouette-of-a-car/silhouette-of-a-car-7.jpg" alt="cars" width="300"/>
                    
                    
                </li>
                <hr/>
            </div> */}