import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './Car.css';

export default class CarGallery extends Component {

    render() {

        return ( 
        <>
        <section>
            <h1>Car Gallery</h1>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.pinimg.com/736x/80/eb/c5/80ebc5bc8b537e83dfd28431dc3e875e.jpg"
                alt="First slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/IBZamxDstCQ/maxresdefault.jpg"
                alt="Second slide"
                />

                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/95ae7946843613.586664e9e8e07.jpg"
                alt="Third slide"
                />

                
            </Carousel.Item>
            </Carousel>
        </section>

        {/* <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://comcar.co.uk/css/assets/img/vehicle-placeholder.png" />
            <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                <ul>
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
                </li>
                </ul>
                <hr className="hr1"/>
            </Card.Text>
            <Button variant="primary">Delete</Button>
            </Card.Body>
            </Card>
        </div> */}
        </>
        )
    
    }

}