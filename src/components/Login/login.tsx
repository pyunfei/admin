import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface IProps extends RouteComponentProps { }

const Login = (props: IProps) => {

  return (
    <div className="login">
      <form className="login-form">
        <h1>登录</h1>

        <div className="form-item1">
          <button type="button" >
            登录
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;