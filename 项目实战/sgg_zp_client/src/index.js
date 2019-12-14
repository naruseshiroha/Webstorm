/*
* 入口js
* */
import React from "react";
import {render} from "react-dom";
import {HashRouter, Route, Switch} from "react-router-dom"

import Register from "./containers/register/register";
import Login from "./containers/login/login";
import Main from "./containers/main/main"

render((
        <HashRouter>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login" component={Login}/>
                <Route path="" component={Main}/>
            </Switch>
        </HashRouter>)
    , document.getElementById("root"))