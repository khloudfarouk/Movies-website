import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({});
    const params = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=5c4bdf8114fc7b2a7ffe12c72e1f11f5`);
                setMovieDetails(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovieDetails();
    }, [params.id]);

    return (
        <div className="container">
            <h1>{movieDetails.title}</h1>
            <hr />
            <br />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ marginRight: '20px' }}>
                    <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.title} style={{ borderRadius: '10px' }} />
                </div>
                <div style={{ flex: 1, marginTop: '120px' }}>
                    <h2>{movieDetails.title}</h2>
                    <p>{movieDetails.release_date}</p>
                    <p>{movieDetails.overview}</p>
                    <h5>Popularity: {movieDetails.popularity}</h5>

                    <br></br>
                    <h5>Vote Average: {movieDetails.vote_average}</h5>
                    
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <Link className="btn btn-dark" to='/'>back</Link>
                
                
            </div>
        </div>
    );
}

export default MovieDetails;
