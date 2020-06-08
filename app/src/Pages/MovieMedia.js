import React, { Component } from 'react'

export class MovieMedia extends Component {
    constructor(props) {
        super(props)

        this.id = (props.id === undefined) ? 0 : props.id;

    }

    render() {
        return (
            <div style={{ height: this.props.height, width: "fit-content" }}>
                <a href={`/movie/${this.id}`}>
                    <img src={this.props.img} style={{ height: "100%", borderRadius: "5px" }} alt="Movie" />
                </a>
            </div>
        )
    }
}

export default MovieMedia
