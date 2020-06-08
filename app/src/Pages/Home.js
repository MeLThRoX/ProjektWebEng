import React, { Component } from 'react'

import MovieMedia from './MovieMedia.js'
import './Home.css'

export class Home extends Component {
    constructor() {
        super()
        this.state = {
            movies_popular: [],
            movies_top_rated: [],
            tv_popular: [],
            tv_top_rated: []
        }
    }

    componentWillMount() {
        fetch('/api/movies/tmdb/movie/popular').then(res => res.json()).then(res => {
            this.setState({ movies_popular: res.results})
        })

        fetch('/api/movies/tmdb/movie/top_rated').then(res => res.json()).then(res => {
            this.setState({ movies_top_rated: res.results })
        })

        fetch('/api/movies/tmdb/tv/popular').then(res => res.json()).then(res => {
            this.setState({ tv_popular: res.results })
        })

        fetch('/api/movies/tmdb/tv/top_rated').then(res => res.json()).then(res => {
            this.setState({ tv_top_rated: res.results })
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
                    <a href="/tv/popular"><h4 style={{ marginTop: 0 }}>Popular TV-Shows</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.tv_popular) ? this.state.tv_popular.map(movie => (
                            <li key={`movie_${movie.id}`} style={{ height: "100%", flex: "0 0 auto", margin: "0 5px 0 5px" }}>
                                <MovieMedia height="100%" img={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} id={movie.id} />
                            </li>
                        )) : 'loading'}
                    </ul>
                </div>

                <div className="z-depth-2" style={{ width: "100%", height: "300px", borderRadius: "15px", padding: "10px", marginBottom: "20px" }}>
                    <a href="/tv/top_rated"><h4 style={{ marginTop: 0 }}>Top Rated TV-Shows</h4></a>
                    <ul style={{ height: "80%", display: "flex", flexDirection: "row", overflowX: "auto", overflowY: "hidden" }}>
                        {(this.state.tv_top_rated) ? this.state.tv_top_rated.map(movie => (
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
