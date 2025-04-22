import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Banner/Banner.css';

import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';

const api_key = 'aa6fabd4cea007bff532f0484bb41bd8'; 
const imageURL = 'https://image.tmdb.org/t/p/original/';

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getRandomMovieIndex = () => Math.floor(Math.random() * 20); 

    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`)
      .then(response => {
        const randomIndex = getRandomMovieIndex();
        setMovie(response.data.results[randomIndex]);
        console.log(data.results);
      })
      .catch(error => {
        console.error('Error fetching movie:', error);
      });
  }, []);
console.log('movie',movie);
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageURL}${movie.backdrop_path})` }}>
      <div className="content">
        <h1 className="title">{movie.original_title || movie.title || movie.name}</h1>
        <div className="banner_buttons">
          <button className="button"><img src={play_icon} alt="Play" />Play</button>
          <button className="button"><img src={info_icon} alt="Info" />More Info</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
