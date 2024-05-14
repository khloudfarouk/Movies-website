import axios from "axios";
import { useEffect, useState } from "react";
import Moviecard from "./Moviecard";
import React, { useContext } from 'react';
import { LanguageContext } from "../context/language";

const Movielist = () => {
    const [moves, setMoves] = useState([]);   
    const [search, setSearch] = useState("");
    const [allMoves, setAllMoves] = useState([]);
    const { language } = useContext(LanguageContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5c4bdf8114fc7b2a7ffe12c72e1f11f5&language=${language}`);
                setMoves(response.data.results);
                setAllMoves(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        fetchData();
    }, [language]);
    

    const handleSearch = (value) => {
        setSearch(value);
        const filtered = moves.filter(movie =>
            movie.title.toLowerCase().includes(value.toLowerCase())
        );
        setMoves(filtered);
    };
    const handleReset = () => {
        setSearch("");
        setMoves(allMoves);      
      };

    return (
        <div className="container">
            <br/><br/><br/>
            <h1>Movies</h1>
            <div className="mb-3 mt-4">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <br/>
                <button className="btn btn-dark" onClick={handleReset}>Reset</button>
            </div>
            <hr />
            <div className="move-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {moves.map((movie) => (
                    <Moviecard key={movie.id} item={movie} />
                ))}
            </div>
        </div>
    );
};

export default Movielist;
