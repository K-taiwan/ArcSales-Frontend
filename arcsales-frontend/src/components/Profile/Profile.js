import React, { Component } from 'react';
import EditProfile from './EditProfile/EditProfile';
import DeleteProfile from './DeleteProfile/DeleteProfile';
import './Profile.css';

class Profile extends Component {
    render() {
        return (
            <section>
                <div className="profile-container hero-image">
                <h1 className="title">
                    FirstName: {this.props.profile.user && this.props.profile.user.firstName}
                    <br></br>
                    LastName: {this.props.profile.user && this.props.profile.user.lastName}
                    <br></br>
                    Email: {this.props.profile.user && this.props.profile.user.email}

                
                </h1>
                </div>
                {this.props.profile.user && <EditProfile user={this.props.profile.user} />}
                {this.props.profile.user && <DeleteProfile user={this.props.profile.user} setCurrentUser={this.props.setCurrentUser} />}

            </section>

        )
    }
}

export default Profile;