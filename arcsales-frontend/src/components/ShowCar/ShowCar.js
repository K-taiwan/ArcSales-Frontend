import React, { Component } from 'react';


export default class ShowCar extends Component {
    
    render() {
        
        return(
            
            <div>
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
                    
                    <hr/>
                </li>
            </div>
        )
    }
}