import React, { Component } from 'react'
import M from 'materialize-css';
import { Cookies } from 'react-cookie'

export class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    submit() {
        if (!this.state.username || !this.state.password) {
            M.toast({ html: 'Please fill all fields!' });
            return;
        } else {
            fetch('/api/users/auth', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            }).then(res => {
                if (res.ok) {
                    res.json().then(res => {
                        (new Cookies('Authorization')).set('Authorization', res.token, { path: '/' })
                    })
                    M.toast({ html: 'Login successful' })
                }
                else res.json().then(res => {
                    M.toast({ html: res.msg })
                })
            })
        }
    }

    render() {
        return (
            <div className="container z-depth-3" style={{ borderRadius: "10px", padding: "20px", margin: "30vh auto", width: "500px" }}>
                <div className="input-field col s6">
                    <input id="username" type="text" className="validate" onChange={e => this.setState({ username: e.target.value })} />
                    <label htmlFor="username" style={{ left: "0" }}>Username</label>
                </div>
                <div className="input-field col s6">
                    <input id="password" type="password" className="validate" onChange={e => this.setState({ password: e.target.value })} />
                    <label htmlFor="password" style={{ left: "0" }}>Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => { this.submit() }}>
                    Login<i className="material-icons right">send</i>
                </button>
                <a href="/signup" style={{ float: "right" }}>Create Account</a>
            </div >
        )
    }
}

export default Login
