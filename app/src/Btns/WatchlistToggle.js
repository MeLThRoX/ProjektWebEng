import React, { Component } from '../../node_modules/react'
import { Cookies } from 'react-cookie'
import M from 'materialize-css';

export class WatchlistToggle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            exists: undefined
        }
    }

    componentWillMount() {
        fetch('/api/watchlist/check', {
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
            fetch('/api/watchlist/delete', {
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
                    M.toast({ html: "Removed from watchlist!" })
                    this.setState({ exists: false })
                }
            })
        } else {
            fetch('/api/watchlist/add', {
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
                    M.toast({ html: "Added to watchlist!" })
                    this.setState({ exists: true })
                }
            })
        }
    }

    render() {
        return (
            <a style={{ marginRight: "10px" }} onClick={() => { this.click() }} class="btn-floating waves-effect waves-light green"><i class={`fas ${this.state.exists ? "fa-minus" : "fa-plus"}`}></i></a>
        )
    }
}

export default WatchlistToggle
