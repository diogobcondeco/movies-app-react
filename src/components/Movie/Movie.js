import React from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w1280";
const Movie = ({ poster_path, title, release_date, vote_average, overview }) => {
	const oldDate = release_date;
	const day = oldDate.slice(8, 10);
	const month = oldDate.slice(5, 7);
	const year = oldDate.slice(0,4);
	const newDate = day + "-" + month + "-" + year;

	const setVoteClass = (vote) => {
		if(vote >= 8) {
			return "green";
		} else if(vote >= 6) {
			return "orange";
		} else {
			return "red";
		}
	}

	return (
		<div className="movie">
			<img src={API_IMG + poster_path} alt={title}></img>
			<div className="movie-info">
				<h3>{title}</h3>
				{/* <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span> */}
				<h3>Rating: <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span></h3>
				<h3>Release Date: {newDate}</h3>
			</div>
			<div className="movie-overview">
				<h3>Overview:</h3>
				<p>{overview}</p>
			</div>
		</div>
	)
}

export default Movie;