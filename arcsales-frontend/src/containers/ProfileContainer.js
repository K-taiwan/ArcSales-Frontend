import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
import AddCarsContainer from './AddCarsContainer';
import axios from 'axios';

class ProfileContainer extends Component {
    state = {
        profile: {},
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
        axios.get(`${process.env.REACT_APP_API_URL}/cars/${userId}`, {
            withCredentials: true,
        })
            .then(res => console.log(res))
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
           
    }

    updateProfile = (updatedProfile) => {
        this.setState({
            profile: updatedProfile
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
                    RightSide, Why is it not showing up?????
                    <AddCarsContainer />
                    
                </div>
            </section>

            </>
        )
    }
}

export default ProfileContainer;
