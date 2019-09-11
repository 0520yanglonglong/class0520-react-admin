import React, {Component} from 'react';
import {Form, Icon, Input, Button, message} from 'antd';
import { saveUser } from '@redux/action-creators';
import {connect} from 'react-redux';
import  {reqLogin} from  '../../api';
import bg from './bg.jpg';
import logo from './logo.png';
import './index.less';

@connect(
    null,
    { saveUser }
)
@Form.create()
class Login extends Component {

    validator = (rule, value, callback) => {
        // console.log(rule, value);
        const name = rule.field === 'username' ? '用户名' : '密码';
        if (!value) {
            return callback(`请输入${name}`);
        }
        if (value.length < 3) {
            return callback(`${name}长度必须大于3位`);
        }
        if (value.length > 13) {
            return callback(`${name}长度必须小于13位`);
        }
        const reg = /^[a-zA-Z0-9_]{3,13}$/;
        if (!reg.test(value)) {
            return callback(`${name}只能包含英文、数字和下划线`);
        }
        // callback必须调用
        callback();
    };
    login =(e)=>{
       e.preventDefault();
       this.props.form.validateFields ( (error,values)=>{
            if(!error){
                // const {} = this.props.values;
                const { username, password } = values;
                     reqLogin(username, password)
                    .then((result)=>{
                            //登陆成功
                            message.success('登陆成功~~~');
                            this.props.saveUser(result);
                            this.props.history.replace('/');

                    })
                         .catch(()=>{
                             this.props.form.resetFields(['password']);
                         })
                    // .catch((error) => {
                    //     // 请求失败 - 登录失败
                    //     // message.error('未知错误，请联系管理员~');
                    // })

            }
       })
    };
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo"/>
                    <h1>React项目: 后台管理系统</h1>
                </header>
                <section className="login-section">
                    <h3>用户登录</h3>
                    <Form onSubmit={this.login}>
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'username',
                                    {
                                        rules: [
                                             // 只适用于简单的检验场景
                                             { required: true, message: '请输入用户名' },
                                             { min: 3, message: '用户名长度必须大于3位' },
                                             { max: 13, message: '用户名长度必须小于13位' },
                                             { pattern: /^[a-zA-Z0-9_]{3,13}$/, message: '用户名只能包含英文、数字和下划线' },
                                            // { validator: this.validator }
                                        ]
                                    }
                                )(
                                    <Input prefix={<Icon type="user" />} placeholder="用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'password',
                                    {
                                        rules:[
                                            {
                                                validator:this.validator
                                            }
                                        ]
                                    }

                                )(
                                    <Input prefix={<Icon type="lock" />} placeholder="密码" type="password"/>
                                )
                            }
                        </Form.Item>

                        <Form>
                            <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                        </Form>
                    </Form>
                </section>

            </div>
        );
    }
}
export default Login;

