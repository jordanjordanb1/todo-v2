import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.scss';
import Main from './components/MainPage/Main';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
