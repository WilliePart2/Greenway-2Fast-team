import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Landing} from './pages/landing';
import {ReferalPage} from './pages/referalPage';
import {UserWorkspace} from './pages/userWorkspace';
import {RegistrationPage} from "./pages/RegistrationPage";
import './App.scss';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/ref/" component={ReferalPage}/>
                    <Route path="/workspace" component={UserWorkspace}/>
                    <Route extact path="/" component={Landing}/>
                    <Route path="/login" component={RegistrationPage}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
