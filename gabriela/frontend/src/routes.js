import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/index';
import Listar from './pages/lista';
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'  component={Home} />
                <Route exact path='/listar'  component={Listar} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;