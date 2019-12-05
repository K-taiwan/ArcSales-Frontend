import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Splash from '../components/Splash/Splash';
// import Login from '../components/Auth/Login';
// import Register from '../components/Auth/Register';

export default ({currentUser, setCurrentUser}) => (
    <Switch>
        <Route exact path='/' component={Splash} />
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