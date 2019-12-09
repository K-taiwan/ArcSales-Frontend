import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import AddCarsContainer from './AddCarsContainer';
import ShowCar from '../components/ShowCar/ShowCar';
import axios from 'axios';

class ProfileContainer extends Component {
    state = {
        profile: {},
        userCar: [],
    }

    componentDidMount() {
        const userId = localStorage.getItem('uid');
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`,{
            withCredentials: true,
        })
         .then((res) => {
             this.setState({
                profile: res.data.data,
             });
         })
         .catch((err) => console.log(err));


         // GET USER CARS
        axios.get(`${process.env.REACT_APP_API_URL}/cars/get/${userId}`, {
            withCredentials: true,
        })
        .then((res) => {
            this.setState({
               userCar: res.data.data,
            });
        })
            .catch(err => console.log(err));
    }

    componentDidUpdate(){
        const userId = localStorage.getItem('uid');
        // GET USER PROFILE
        axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            withCredentials: true,
        })
            .then((res) => {
                this.setState({
                    profile: res.data.data
                });
            })
            .catch((err) => console.log(err));
            

        // GET USER CARS
        // axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
        //     withCredentials: true,
        // })
        //     .then((res) => {
        //         this.setState({
        //             userCar: res.data.data
        //         });
        //     })
        //     .catch((err) => console.log(err));
           
    }

    updateProfile = (updatedProfile) => {
        this.setState({
            profile: updatedProfile
        })
    }

    displayCar = (displayedCar) => {
        this.setState({
            useCar: displayedCar
        })
    }

    render() {
        return (
            <>
            <section className="col">
                <div className="wrap grid-wrapper">
                    {this.state.profile && <Profile profile={this.state.profile} updateProfile={this.updateProfile}/>}
                </div>
            </section>
            <br></br>
            <section className="row">
                <div className="col wrap grid-wrapper">
                    LeftSide
                </div>
        
                
            
                <div className="col wrap grid-wrapper">
                    Your Car List: {this.state.userCar && <AddCarsContainer userCar={this.state.userCar} displayCar={this.displayCar}/>}
                    <div>
                        <ul>
                            {
                                this.state.userCar.map((data) => {
                                    return(
                                        <ShowCar data={data} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </section>

            </>
        )
    }
}

export default ProfileContainer;



{/* {<displayCar userCar={this.state.userCar} />} */}


                    {/* <div>
                        <ul>
                            {
                                this.state.carArray.map((userCar, index) => {
                                    return(
                                        <ShowCar id={userCar.image} />
                                    )
                                })
                            }
                        </ul>
                    </div> */}