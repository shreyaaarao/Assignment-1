import React, { useState } from 'react';
import './Dashboard.css';

const movies = [
  { id: 1, title: 'Kantara', director: 'Rishabh Shetty', year: 2022, imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.bCsvKJO7z0QL-TYBNjNfHAHaJQ?rs=1&pid=ImgDetMain' },
  { id: 2, title: 'Fighter', director: 'Siddharth Anand', year: 2024, imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.HFIUZeMWESfwXNjotPfxOgHaJQ?w=195&h=244&c=7&r=0&o=5&dpr=1.5&pid=1.7' },
  { id: 3, title: 'Hi Nana', director: 'Shouryuv', year: 2023, imageUrl: 'https://tse2.mm.bing.net/th/id/OIP.SI9HKTwl7zHk-hmhQQmnWwAAAA?rs=1&pid=ImgDetMain' },
  
];

const Dashboard = () => {
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    const handleMovieClick = (movieId) => {
      const movie = movies.find(movie => movie.id === movieId);
      setSelectedMovie(movie);
    };
  
    return (
      <div className="dashboard">
        <h1>Movies</h1>
        <div className="movie-list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie" onClick={() => handleMovieClick(movie.id)}>
              <img src={movie.imageUrl} alt={movie.title} className="movie-image" />
              <span className="movie-name">{movie.title}</span>
            </div>
          ))}
        </div>
        {selectedMovie && (
          <div className="movie-details">
            <img src={selectedMovie.imageUrl} alt={selectedMovie.title} className="movie-image" />
            <div className="movie-info">
              <p><strong>Title:</strong> {selectedMovie.title}</p>
              <p><strong>Director:</strong> {selectedMovie.director}</p>
              <p><strong>Year:</strong> {selectedMovie.year}</p>
            </div>
          </div>
        )}
      </div>
    );
  };

export default Dashboard;
