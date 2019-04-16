import React, { Component } from 'react'
import { Login } from 'ant-design-pro'
import { Alert, Checkbox } from 'antd'
import style from './login.css'


const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default class LoginDemo extends React.Component {
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true,
  };
  onSubmit = (err: any, values: any) => {
    // console.log('value collected ->', {
    //   ...values,
    //   autoLogin: this.state.autoLogin,
    // });
  };
  onTabChange = (key: any) => {
    this.setState({
      type: key,
    });
  };
  changeAutoLogin = (e: any) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };
  render() {
    return (
      <div className={style.loginWarp}>
        <Login
          onTabChange={this.onTabChange}
          onSubmit={this.onSubmit}
        >
          <Mobile name="mobile" />
          <Captcha
            // onGetCaptcha={() => console.log('Get captcha!')}
            name="captcha"
          />
          <div>
            <Checkbox
              checked={this.state.autoLogin}
              onChange={this.changeAutoLogin}
            >
              Keep me logged in
            </Checkbox>
            <a style={{ float: 'right' }} href="">
              Forgot password
            </a>
          </div>
          <Submit>Login</Submit>
        </Login>
      </div>
    );
  }
}
