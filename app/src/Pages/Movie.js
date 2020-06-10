import React, { Component } from 'react'

import WatchlistToggle from '../Btns/WatchlistToggle'
import SeenToggle from '../Btns/SeenToggle'

export class Movie extends Component {
    constructor(props) {
        super(props)
        this.id = props.match.params.id;
        this.state = {
            movie: null
        }
    }

    componentWillMount() {
        fetch(`/api/movies/tmdb/movie/${this.id}`).then(res => res.json()).then(res => {
            this.setState({ movie: res })
        })
    }

    render() {
        return (
            (this.state.movie !== null) ? (
                <div>
                    <div class="parallax-container" style={{ borderRadius: "10px" }}>

                        <div class="parallax" ><img src={`https://image.tmdb.org/t/p/w1280/${this.state.movie.poster_path}`} style={{ transform: "translate3d(-501px, 700px, 0px)", opacity: "1", filter: 'blur(15px)' }}></img></div>
                        <div className="row">
                            <div className="col s3">

                                <img alt={`movie_${this.state.movie.id}`} className="z-depth-2" src={`https://image.tmdb.org/t/p/w1280/${this.state.movie.poster_path}`} style={{ width: "100%", marginTop: "9px", borderRadius: "10px" }}></img>
                                <WatchlistToggle movieId={this.state.movie.id}></WatchlistToggle>
                                <SeenToggle movieId={this.state.movie.id}></SeenToggle>
                            </div>

                            <div class="col s9 card-panel hoverable" style={{ color: 'white', width: "73%", borderRadius: "10px", backgroundColor: "#2b2b2b" }}>
                                <h4><strong>{this.state.movie.title}</strong> ({this.state.movie.release_date.split("-")[0]})</h4>

                                <div class="divider" style={{ height: "1px" }}></div>
                                <h5>Description</h5>
                                <p style={{ marginBottom: "30px" }}>{this.state.movie.overview}</p>
                                <div class="divider" style={{ marginBottom: "15px", height: "2px" }}></div>

                                <div className="row">
                                    <div className="col s5">
                                        {this.state.movie.genres.map(genre => (
                                            <div style={{ border: "2px solid #00FEBD", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>
                                                <p style={{ margin: "0" }}>{genre.name}</p>
                                            </div>))}
                                    </div>
                                    <div className="col 7">
                                        <p style={{ border: "2px solid #00FEBD", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>{this.state.movie.runtime} min</p>
                                        <p style={{ border: "2px solid #00FEBD", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>{this.state.movie.release_date}</p>
                                        <p style={{ border: "2px solid #00FEBD", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>Popularity {this.state.movie.popularity}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : 'Loading'
        )
    }
}

export default Movie
