import React, { Component } from 'react'
import M from 'materialize-css';

export class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    componentDidMount() {
        M.AutoInit();
    }

    submit() {
        if (!this.state.username || !this.state.password) {
            M.toast({ html: 'Please fill all fields!' });
            return;
        }
    }

    render() {
        return (
            <div className="container z-depth-3" style={{ borderRadius: "10px", padding: "20px", margin: "30vh auto", width: "500px" }}>
                <div className="input-field col s6">
                    <input id="username" type="text" class="validate" onChange={e => this.setState({ username: e.target.value })} />
                    <label for="username" style={{ left: "0" }}>Username</label>
                </div>
                <div className="input-field col s6">
                    <input id="password" type="password" class="validate" onChange={e => this.setState({ password: e.target.value })} />
                    <label for="password" style={{ left: "0" }}>Password</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit" name="action" onClick={() => { this.submit() }}>
                    Login<i class="material-icons right">send</i>
                </button>
                <a href="/signup" style={{ float: "right" }}>Create Account</a>
            </div >
        )
    }
}

export default Login
