import React, { Component } from 'react';
import Profile from '../components/Profile/Profile';
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
    }

    componentDidUpdate(){
        const userId = localStorage.getItem('uid');
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
            <div className="col">
                <section>
                    <div className="wrap grid-wrapper">
                       {this.state.profile && <Profile profile={this.state.profile} updateProfile={this.updateProfile}/>}
                    </div>
                </section> 
            </div>

            
            </>
        )
    }
}

export default ProfileContainer;
