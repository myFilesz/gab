import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/home/home';
import ListRequests from './pages/Requests/ListRequests/ListRequests';
import ProductRegistration from './pages/Products/RegisterProducts/ProductRegistration'
import RequestCreate from './pages/Requests/RequestCreate/RequestCreate';
//auth
import {isAuthenticated} from './auth/authContext';

//Products

//Users
import Join from './pages/Users/join/Join';

const PrivateRoute = ({component: Component}) => (
    <Route  render={props => isAuthenticated() ? (
      <Component {...props} />
    ) : (
     <Redirect to={{ pathname: '/users/join', state: {from: props.location} }} />
    )
    }/>
);

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                
                {/* Usuarios */}
                <Route path='/users/join'  component={Join} />
                
                 {/* Produtos */}
                <PrivateRoute exact path='/' component={Home}/>
                <PrivateRoute exact path='/products/productsregistration' component={ProductRegistration} />
                
                {/* Requests */}
                <PrivateRoute exact path='/requests' component={ListRequests} />
                <PrivateRoute exact path="/requests/requestscreate" component={RequestCreate} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes;