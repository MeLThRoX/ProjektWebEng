import React, { Component } from 'react'
import { Cookies } from 'react-cookie'

import MovieMedia from './MovieMedia.js'
import './Home.css'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies_popular: [],
            movies_top_rated: [],
            watchlist: [],
            seen: []
        }
    }

    componentWillMount() {
        fetch('/api/movies/tmdb/movie/popular').then(res => res.json()).then(res => {
            this.setState({ movies_popular: res.results})
        })

        fetch('/api/movies/tmdb/movie/top_rated').then(res => res.json()).then(res => {
            this.setState({ movies_top_rated: res.results })
        })

        fetch('/api/watchlist/resolve', { headers: { "x-auth-token": (new Cookies('Authorization').get('Authorization', { path: '/' })) } }).then(res => {
            if (res.ok) {
                res.json().then(res => {
                    console.log(res)
                    this.setState({ watchlist: res })
                })
            }
        })

        fetch('/api/seen/resolve', { headers: { "x-auth-token": (new Cookies('Authorization').get('Authorization', { path: '/' })) } }).then(res => {
            if (res.ok) {
                res.json().then(res => {
                    this.setState({ seen: res })
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div className="z-depth-2" style={{ width: "100%", height: "300px", borderRadius: "15px", padding: "10px", marginBottom: "20px" }}>
                    <a href="/movies/popular"><h4 style={{ marginTop: 0 }}>Popular Movies</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.movies_popular) ? this.state.movies_popular.map(movie => (
                            <li key={`movie_${movie.id}`} style={{ height: "100%", flex: "0 0 auto", margin: "0 5px 0 5px" }}>
                                <MovieMedia height="100%" img={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} id={movie.id}/>
                            </li>
                        )) : 'loading'}
                    </ul>
                </div>

                <div className="z-depth-2" style={{ width: "100%", height: "300px", borderRadius: "15px", padding: "10px", marginBottom: "20px" }}>
                    <a href="/movies/top_rated"><h4 style={{ marginTop: 0 }}>Top Rated Movies</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.movies_top_rated) ? this.state.movies_top_rated.map(movie => (
                            <li key={`movie_${movie.id}`} style={{ height: "100%", flex: "0 0 auto", margin: "0 5px 0 5px" }}>
                                <MovieMedia height="100%" img={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} id={movie.id} />
                            </li>
                        )) : 'loading'}
                    </ul>
                </div>

                <div className="z-depth-2" style={{ width: "100%", height: "300px", borderRadius: "15px", padding: "10px", marginBottom: "20px" }}>
                    <a href="/watchlist"><h4 style={{ marginTop: 0 }}>Watchlist</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.watchlist) ? this.state.watchlist.map(movie => (
                            <li key={`movie_${movie.id}`} style={{ height: "100%", flex: "0 0 auto", margin: "0 5px 0 5px" }}>
                                <MovieMedia height="100%" img={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} id={movie.id} />
                            </li>
                        )) : 'loading'}
                    </ul>
                </div>

                <div className="z-depth-2" style={{ width: "100%", height: "300px", borderRadius: "15px", padding: "10px", marginBottom: "20px" }}>
                    <a href="/seen"><h4 style={{ marginTop: 0 }}>Seen Movies</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.seen) ? this.state.seen.map(movie => (
                            <li key={`movie_${movie.id}`} style={{ height: "100%", flex: "0 0 auto", margin: "0 5px 0 5px" }}>
                                <MovieMedia height="100%" img={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} id={movie.id} />
                            </li>
                        )) : 'loading'}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home
