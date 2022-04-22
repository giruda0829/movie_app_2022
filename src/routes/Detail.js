import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="movie_data">
            <h3 className="movie_title">{location.state.title}</h3>
            <h5 className="movie_year">{location.state.yaer}</h5>
            <ul className="movie_genres">
              {location.state.genres.map((genre, index) => {
                return (
                  <li key={index} className="movie_genre">
                    {genre}
                  </li>
                );
              })}
            </ul>
            <p className="movie_summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
