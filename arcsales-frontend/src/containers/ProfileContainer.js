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
                 firstName: res.data.data.firstName,
                 lastName: res.data.data.lastName,
             });
         })
         .catch((err) => console.log(err));
    }
}