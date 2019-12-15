/*
* 注册路由组件
* */
import React, {Component} from 'react';
import {
    Button,
    InputItem,
    List,
    NavBar,
    Radio,
    WhiteSpace,
    WingBlank,
} from "antd-mobile";

import Logo from "../../components/logo/logo";

const listItem = List.Item

class Register extends Component {
    render() {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>

            </div>
        );
    }
}

export default Register;