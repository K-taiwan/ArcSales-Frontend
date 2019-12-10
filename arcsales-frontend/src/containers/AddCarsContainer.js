import React, { Component } from 'react';
import AddCar from '../components/AddCar/AddCar';
import axios from 'axios';

class AddCarsContainer extends Component {
    state = {
        car: [],
        loaded: false,
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        
        axios.get(`${process.env.REACT_APP_API_URL}/cars/${userId}`,{
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
    
        
      // GET USER CARS


    // componentDidUpdate(){
    //     const userId = localStorage.getItem('uid');
    //     axios.get(`${process.env.REACT_APP_API_URL}/cars/${userId}`,{
    //         withCredentials: true,
    //     })
    //      .then((res) => {
    //          this.setState({
    //             car: res.data.data,
    //          });
    //      })
    //      .catch((err) => console.log(err));

    //     }

    

    render() {
        return (
            <>
            <section className="col">
                <div className="wrap grid-wrapper">
                    <h4>{this.state.car.brand}</h4>
                    {/* {this.state.car && <AddCar car={this.state}/>} */}
                    
                
                    <AddCar />
                </div>
            </section>

            

            </>
        )
    }
}

export default AddCarsContainer;
