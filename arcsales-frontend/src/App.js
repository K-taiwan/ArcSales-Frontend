import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Routes from './config/routes';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
    state = {
      currentUser: localStorage.getItem('uid'),
    }


    setCurrentUser = (userId) => {
      console.log(userId);
      this.setState({
        currentUser: userId
      });
      localStorage.setItem('uid', userId);
    }

    logout = () => {
      localStorage.removeItem('uid');
      axios.delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true,   
      })
        .then(res => {
          console.log(res);
          this.setState({ currentUser: null });
          localStorage.removeItem('uid');
          this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }
  
    render() {
      return (
        <>
          <Navbar currentUser={this.state.currentUser} logout={this.logout} setCurrentUser={this.setCurrentUser} />
          <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
        </>
      );
    }
}
export default withRouter(App);