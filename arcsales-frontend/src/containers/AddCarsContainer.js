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
        console.log(userId)
        axios.get(`${process.env.REACT_APP_API_URL}/cars/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             console.log(res)
             console.log(this.state.addcar)
             this.setState({
                car: res.data.data,
                loaded: true
             });
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
                    <h4>{this.state.car.model}</h4>
                    {/* {this.state.car && <AddCar car={this.state}/>} */}
                    {this.state.car.map((addcar) => (
                    <AddCar name={ addcar.model } key={ addcar._id } />
                ))}
                    <AddCar />
                </div>
            </section>

            

            </>
        )
    }
}

export default AddCarsContainer;
