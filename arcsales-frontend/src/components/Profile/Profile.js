import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <section>
                <div className="profile-container">
                <h1>{this.props.profile.user && this.props.profile.user.name.split(' ')[0]}'s Profile</h1>
                </div>
            </section>

        )
    }
}

export default Profile;