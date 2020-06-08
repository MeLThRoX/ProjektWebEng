import React, { Component } from 'react'

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
                    <div class="parallax-container">
                        <div class="parallax"><img  src={`https://image.tmdb.org/t/p/w1280/${this.state.movie.poster_path}`} style={{transform: "translate3d(-50%, 1000px, 0px)", opacity: "1"}}></img></div>
                    </div>
                    <div className="row">
                        <div className="col s3">
                            <img alt={`movie_${this.state.movie.id}`} className="z-depth-2" src={`https://image.tmdb.org/t/p/w1280/${this.state.movie.poster_path}`} style={{ width: "100%", marginTop: "9px", borderRadius: "10px" }}></img>
                            {/* eslint-disable-next-line*/}
                            <a href="#" class="waves-effect waves-light btn" onClick={() => { M.toast({ html: 'added to your watchlist!' }) }} style={{ background: "#ef5350", borderRadius: "10px", margin: "0 5px 5px 5px" }}><i className="fas fa-heart"></i></a>
                            {/* eslint-disable-next-line*/}
                            <a href="#" class="waves-effect waves-light btn" onClick={() => { M.toast({ html: 'removed from your watchlist!' }) }} style={{ background: "#fbc02d", borderRadius: "10px", margin: "0 5px 5px 5px" }}><i class="far fa-star"></i></a>
                        </div>

                        <div class="col s9 card-panel hoverable" style={{color: 'white', borderRadius: "10px", backgroundColor:"#2b2b2b" }}>
                            <h4><strong>{this.state.movie.title}</strong> ({this.state.movie.release_date.split("-")[0]})</h4>

                            <div class="divider" style={{ height: "1px" }}></div>
                            <h5>Description</h5>
                            <p style={{ marginBottom: "30px" }}>{this.state.movie.overview}</p>
                            <div class="divider" style={{ marginBottom: "15px", height: "2px" }}></div>

                            <div className="row">
                                <div className="col s5">
                                    {this.state.movie.genres.map(genre => (
                                        <div style={{ background: "#e0e0e0", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>
                                            <p style={{ margin: "0" }}>{genre.name}</p>
                                        </div>))}
                                </div>
                                <div className="col 7">
                                    <p style={{ background: "#e0e0e0", borderRadius: "10px", borderWidth: "15", borderColor: "00FEBD", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>{this.state.movie.runtime} min</p>
                                    <p style={{ background: "#e0e0e0", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>{this.state.movie.release_date}</p>
                                    <p style={{ background: "#e0e0e0", borderRadius: "10px", padding: "0 7px 0 7px", float: "left", margin: "0 5px 5px 5px" }}>Popularity {this.state.movie.popularity}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s12">
                                    <div class="chip">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFg9YY9VaqBtg/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=fnuEd_G74Y5F6Nw-apzZ1Q6bkxdNMpfeszkMZ4ddyXM" alt="Contact Person"></img>
                                        Adam Bremer
                                    </div>
                                    <div class="chip">
                                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHISLLGYMZ6hw/profile-displayphoto-shrink_200_200/0?e=1597276800&v=beta&t=kEQe6D-s_VnyNTxgMs_bLyGq6B5G9kDKV-mibpqAw58" alt="Contact Person"></img>
                                        Metehan Yurtseven
                                    </div>
                                    <p>du musst mir bei paar sachen helfen, hab probleme mit javascript</p>
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
