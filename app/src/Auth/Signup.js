import React, { Component } from 'react'
import M from 'materialize-css';

export class Signup extends Component {
    state = {
        email: "",
        username: "",
        password: "",
        confirmpassword: ""
    }

    componentDidMount() {
        M.AutoInit();
    }

    submit() {
        if (this.state.email && this.state.username && this.state.password && this.state.confirmpassword) {
            if (this.state.password !== this.state.confirmpassword) {
                M.toast({ html: 'Passwords does not match!' });
                return;
            } else {
                
            }
        } else {
            M.toast({ html: 'Please fill all fields!' });
            return;
        }
    }

    render() {
        return (
            <div className="container z-depth-3" style={{ borderRadius: "10px", padding: "20px", margin: "30vh auto", width: "500px" }}>
                <div className="input-field col s6">
                    <input id="email" type="email" onChange={e => this.setState({ email: e.target.value })} />
                    <label htmlFor="email" style={{ left: "0" }}>E-Mail</label>
                </div>
                <div className="input-field col s6">
                    <input id="username" type="text" onChange={e => this.setState({ username: e.target.value })} />
                    <label htmlFor="username" style={{ left: "0" }}>Username</label>
                </div>
                <div className="input-field col s6">
                    <input id="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
                    <label htmlFor="password" style={{ left: "0" }}>Password</label>
                </div>
                <div className="input-field col s6">
                    <input id="confirmpassword" type="password" onChange={e => this.setState({ confirmpassword: e.target.value })} />
                    <label htmlFor="confirmpassword" style={{ left: "0" }}>Confirm Password</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit" onClick={() => { this.submit()}}>
                    Sign Up<i className="material-icons right">send</i>
                </button>
                <a href="/login" style={{ float: "right" }}>Login</a>
            </div >
        )
    }
}

export default Signup
