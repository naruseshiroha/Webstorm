/*
* 登录路由组件
* */
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

class Login extends Component {

    state = {
        username: "", // 用户名
        password: "", // 密码
    }

    login = () => {
        console.log(this.state)
    }

    // 处理输入数据的改变; 更新对应的状态
    handleChange = (name, value) => {
        this.setState({
                [name]: value   // 属性名不是name, 而是name变量的值
            }
        )
    }

    toRegister = () => {
        this.props.history.replace("/register")
    }

    render() {
        const {type} = this.state

        return (
            <div>
                <NavBar>硅&nbsp;谷&nbsp;直&nbsp;聘</NavBar>
                <Logo/>
                <WingBlank>
                    <List>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入用户名" onChange={val => {
                            this.handleChange("username", val)
                        }}>用户名:</InputItem>
                        <WhiteSpace/>
                        <InputItem placeholder="请输入密码" type="password" onChange={val => {
                            this.handleChange("password", val)
                        }}>密&nbsp;&nbsp;&nbsp;码:</InputItem>
                        <WhiteSpace/>
                        <Button type="primary" onClick={this.login}>登录</Button>
                        <WhiteSpace/>
                        <Button onClick={this.toRegister}>还没有账户</Button>
                    </List>
                </WingBlank>
            </div>
        );
    }
}

export default Login;