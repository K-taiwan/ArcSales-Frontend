import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
import ProfileContainer from '../containers/ProfileContainer';
// import Car from '../components/Car/Car';
import CarsContainer from '../containers/CarsContainer';
import Car from '../components/Car/Car';

export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/profile' render={() => <ProfileContainer setCurrentUser={setCurrentUser} />} />
        <Route path='/car' component={Car} />
        <Route path='/logout' component={Splash}/>
    </Switch>
);


// <Route path='/register' component={Register} />
//         <Route
//             path="/login"
//             render={() => (
//                 <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
//             )}
//         />
//         <Route path='/logout' component={Splash}/>