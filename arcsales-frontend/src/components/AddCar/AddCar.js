import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import axios from "axios";
import AddCarModal from './AddCarModal/AddCarModal';

class AddCar extends Component {
    state = {
      model: '',
      brand: '',
      year: '',
      new: '',
      price: '',
      color: '',
      image: ''
    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = event => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_API_URL}/cars/new`, this.state, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        
      })
      .catch((err) => console.log(err))

    };

    render() {
      return (
        <AddCarModal 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit} 
        user={this.state} 
        model={this.state.model}
        brand={this.state.brand}
        year={this.state.year}
        new={this.state.new}
        price={this.state.price}
        color={this.state.color}
        image={this.state.image}
        />
       )
    }
}

export default withRouter(AddCar);
