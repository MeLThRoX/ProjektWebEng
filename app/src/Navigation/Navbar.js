import React, { Component } from 'react'
import M from 'materialize-css';

export class Navbar extends Component {
    componentDidMount() {
        M.AutoInit();
    }

    render() {
        return (
            <div style={{ marginBottom: "20px" }}>
                <nav>
                    <div className='nav-wrapper'>
                        <ul className="left hide-on-med-and-down">
                            {/* eslint-disable-next-line */}
                            <li><a href="#" data-target="slide-out" className="sidenav-trigger" style={{ display: "block" }}><i className="fas fa-bars"></i></a></li>
                        </ul>
                        {/* eslint-disable-next-line */}
                        <a href="/home" className="brand-logo center">WhatsNext</a>
                        <ul className="right hide-on-med-and-down">
                            {/* eslint-disable-next-line */}
                            <li><a href="/login" style={{ display: "block" }}><i className="fas fa-user"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <nav style={{ borderRadius: "0 0 30px 30px", boxShadow: "0 2px 2px -2px rgba(0,0,0,0.14), 0 3px 1px -1px rgba(0,0,0,0.12), 0 1px 5px -5px rgba(0,0,0,0.2)" }}>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" required></input>
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <ul id="slide-out" className="sidenav">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/watchlist">Watchlist</a></li>

                    <li><div className="divider"></div></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="subheader">Movies</a></li>
                    <li><a href="/movies/popular">Popular</a></li>
                    <li><a href="/movies/top_rated">Top Rated</a></li>

                    <li><div className="divider"></div></li>
                    {/* eslint-disable-next-line */}
                    <li><a href="#" className="subheader">TV-Shows</a></li>
                    <li><a href="/tv/popular">Popular</a></li>
                    <li><a href="/tv/top_rated">Top Rated</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar
