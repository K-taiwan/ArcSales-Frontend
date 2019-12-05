import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
import Profile from '../components/Profile/Profile';
import Car from '../components/Car/Car';

export default ({currentUser, setCurrentUser}) => (
    <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/profile' component={Profile} />
        <Route path='/car' component={Car} />
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