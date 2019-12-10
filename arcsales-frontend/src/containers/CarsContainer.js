import React, { Component } from 'react';

import axios from 'axios';
import CarGallery from '../components/Car/Car';

class AddCarsContainer extends Component {
    state = {
        car: [],
        loaded: false,
    }

    componentDidMount() {
        
        
        axios.get(`${process.env.REACT_APP_API_URL}/cars/all`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res)
             
             
             this.setState({
                car: res.data.data,
                loaded: true
             });
             console.log(this.state)
             console.log(this.state.car)
         })
         .catch((err) => console.log(err));

        }
    
        
     

    render() {
        return (
            <>
            <section className="col">
                <div className="wrap grid-wrapper">
                    <h4>{this.state.car}</h4>
                    
                    
                
                    <CarGallery />
                </div>
            </section>

            

            </>
        )
    }
}

export default AddCarsContainer;