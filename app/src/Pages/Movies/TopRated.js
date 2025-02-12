import React, { Component } from 'react'
import WatchlistToggle from '../../Btns/WatchlistToggle'
import SeenToggle from '../../Btns/SeenToggle'

export class TopRated extends Component {
    constructor() {
        super()
        this.state = {
            movies: [],
        }
    }

    componentWillMount() {
        fetch('/api/movies/tmdb/movie/top_rated').then(res => res.json()).then(res => {
            this.setState({ movies: res.results })
        })
    }

    render() {
        return (
            <div>
                {this.state.movies.map(movie => (
                    <div className="row z-depth-2" style={{ width: "100%", borderRadius: "15px", padding: "10px" }}>
                        <div className="col s3">
                            <a href={`/movie/${movie.id}`}>
                                <img alt={`movie_${movie.id}`} src={`https://image.tmdb.org/t/p/w1280/${movie.poster_path}`} style={{ width: "100%", borderRadius: "10px" }}></img>
                            </a>
                        </div>
                        <div className="col s9">
                            <a href={`/movie/${movie.id}`} style={{ color: "black" }}><h5><strong>{movie.title}</strong> ({movie.release_date.split('-')[0]})</h5></a>
                            <p>{movie.overview}</p>
                            <WatchlistToggle movieId={movie.id}></WatchlistToggle>
                            <SeenToggle movieId={movie.id}></SeenToggle>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default TopRated
