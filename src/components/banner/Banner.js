import React from "react";
import "./Banner.css";

function Banner({ data, arrToString }) {
  let budget = data.budget,
    genres = arrToString(data.genres),
    officiaWeb = data.homepage,
    title = data.original_title,
    description = data.overview,
    poster = `https://image.tmdb.org/t/p/original${data.poster_path}`,
    production = arrToString(data.production_companies),
    releaseDate = data.release_date,
    runtime = data.runtime,
    language = arrToString(data.spoken_languages),
    tagline = data.tagline,
    status = data.status,
    rate = data.vote_average;
  return (
    <div className="banner">
      <div className="wrapper container d-flex">
        <div className="poster p-2 flex-fill bd-highlight">
          <img src={poster} />
        </div>
        <div className="movie--info p-2 flex-fill bd-highlight">
          <h1 className="movie-title"> {title}</h1>
          <h3 className="subtitle">{tagline}</h3>
          <p className="description"> {description}</p>
          <h3 className="genre">{genres}</h3>
          <p className="production">{production}</p>
          <p className="release-date">
            Release Date: <span>{releaseDate}</span>
          </p>
          <p className="running-time">
            Runnig time
            <span>{runtime}</span>
          </p>
          <p className="budget">
            Budget
            <span>{budget}</span>
          </p>
          <p className="vote">
            vote:
            <span>{rate}</span>
          </p>
          <p className="note">
            {" "}
            <span>{officiaWeb}</span>
            <span>{language}</span>
            <span>{status}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Banner;
