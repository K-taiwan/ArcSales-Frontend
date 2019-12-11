import React, { Component } from 'react';

import axios from 'axios';
import CarGallery from '../components/Car/Car';

class CarsContainer extends Component {
    state = {
        cars: [],
    }

    componentDidMount() {
        
        
        axios.get(`${process.env.REACT_APP_API_URL}/cars/all`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res)
             
             
             this.setState({
                cars: res.data.data,
             });
            // console.log(this.state)
             //console.log(this.state.cars)
         })
         .catch((err) => console.log(err));

        }

     

    render() {
        return (
            <>
            <section className="col">
                <div className="wrap grid-wrapper">
                    {/* <h4>{this.state.cars}</h4> */}
                    
                    { this.state.cars.map(car => (
                        <CarGallery car={ car }/>
                    ))}
                
                    
                </div>
            </section>

            

            </>
        )
    }
}

export default CarsContainer;