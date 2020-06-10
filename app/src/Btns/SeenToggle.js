import React, { Component } from '../../node_modules/react'
import { Cookies } from 'react-cookie'
import M from 'materialize-css';

export class SeenToggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exists: undefined
        }
    }

    componentWillMount() {
        fetch('/api/seen/check', {
            method: "POST",
            headers: {
                "x-auth-token": (new Cookies('Authorization').get('Authorization', { path: '/' })),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.props.movieId
            })
        }).then(res => {
            if (res.ok) {
                res.json().then(res => {
                    this.setState({ exists: res })
                })
            }
        })
    }

    click() {
        if (this.state.exists === undefined) {
            M.toast({ html: 'Login ot use this feature' })
        }
        if (this.state.exists) {
            fetch('/api/seen/delete', {
                method: "POST",
                headers: {
                    "x-auth-token": (new Cookies('Authorization').get('Authorization', { path: '/' })),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.props.movieId
                })
            }).then(res => {
                if (res.ok) {
                    M.toast({ html: "Removed from seen movies!" })
                    this.setState({ exists: false })
                }
            })
        } else {
            fetch('/api/seen/add', {
                method: "POST",
                headers: {
                    "x-auth-token": (new Cookies('Authorization').get('Authorization', { path: '/' })),
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: this.props.movieId
                })
            }).then(res => {
                if (res.ok) {
                    M.toast({ html: "Added to seen movies!" })
                    this.setState({ exists: true })
                }
            })
        }
    }

    render() {
        return (
            <a onClick={() => { this.click() }} class="btn-floating waves-effect waves-light orange"><i class={`far ${this.state.exists ? "fa-eye-slash" : "fa-eye"}`}></i></a>
        )
    }
}

export default SeenToggle
