import React, { Component } from 'react';
import EditProfile from './EditProfile/EditProfile';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <section>
                <div className="profile-container">
                <h1>{this.props.profile.user && this.props.profile.user.firstName}'s Profile</h1>
                </div>
                {this.props.profile.user && <EditProfile user={this.props.profile.user} />}
            </section>

        )
    }
}

export default Profile;