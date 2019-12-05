import React, {Component} from "react";
import axios from "axios";
import RegisterModal from './Modal/RegisterModal';

class Register extends Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: ''
    };

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    };

    handleSubmit = event => {
      event.preventDefault();
      axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, this.state, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        // this.setState({
        //   firstName: '',
        //   lastName: '',
        //   email: '',
        //   password: '',
        //   password2: '',
        // });
        // this.props.history.push('/login');
      })
      .catch((err) => console.log(err))

    };

    render() {
      return (
        <RegisterModal handleChange={this.handleChange} handleSubmit={this.handleSubmit} user={this.state} emailDup={this.state.emailDup}/>
       )
    }
}

export default Register;
