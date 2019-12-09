import React, { Component } from 'react';
import axios from 'axios';
import DeleteModal from './Modal/DeleteProfileModal';


class DeleteProfile extends Component {
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const userId = localStorage.getItem('uid');
        axios.delete(`${process.env.REACT_APP_API_URL}/users/${userId}`, this.state, {
            withCredentials: true,   
        })
            .then((res) => {
                console.log(res.data.message);
                this.setState({ currentUser: null });
                localStorage.removeItem('uid');
                this.props.history.push('/');
            })
            .catch((err) => console.log(err));
    };

    render(){
        return(
            <DeleteModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} />
        )
    }
};

export default DeleteProfile;