import React, { Component } from 'react';
import axios from 'axios';
import EditModal from './Modal/EditProfileModal';


class EditProfile extends Component {
    state = {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const userId = localStorage.getItem('uid');
        axios.put(`${process.env.REACT_APP_API_URL}/users/${userId}`, this.state, {
            withCredentials: true,   
        })
            .then((res) => {
                console.log(res);
                this.props.updateProfile(res.data.data)
            })
            .catch((err) => console.log(err));
    };

    render(){
        return(
            <EditModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
        )
    }
};

export default EditProfile;