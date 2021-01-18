import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push("/");
        };
    }
    render() {
        const { location } = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <img src={location.state.poster}/>
                    <h1>{location.state.title}</h1>
                    <h3>{location.state.year}</h3>
                    <ul>
                        {location.state.genres.map((genre, index) => (
                            <li key={index}>{genre}</li>
                        ))}
                    </ul>
                    <h4>{location.state.summary}</h4>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;