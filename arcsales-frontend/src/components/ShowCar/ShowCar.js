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
                    {this.props.data.image}
                    <hr/>
                </li>
            </div>
        )
    }
}