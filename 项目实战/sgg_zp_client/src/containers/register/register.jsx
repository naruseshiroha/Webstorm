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

const ListItem = List.Item

class Register extends Component {
    render() {
        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password">密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <InputItem type="password">确认密码:</InputItem>
                        <WhiteSpace/>
                        <ListItem>
                            <span>用户类型:</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio>大神</Radio>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <Radio>老板</Radio>
                        </ListItem>
                        <WhiteSpace/>
                        <Button type="primary">注册</Button>
                        <Button>已有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default Register;