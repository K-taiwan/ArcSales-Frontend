import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
import ProfileContainer from '../containers/ProfileContainer';
import CarsContainer from '../containers/CarsContainer';
// import CarsContainer from '../containers/CarsContainer';


export default ({ currentUser, setCurrentUser }) => (
    <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/profile' render={() => <ProfileContainer setCurrentUser={setCurrentUser} />} />
        <Route path='/car' component={CarsContainer} />
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