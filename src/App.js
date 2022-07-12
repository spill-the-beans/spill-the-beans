import './App.css';

import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import MovieApi from './MovieApi';
import SavedGifs from './SavedGifs';
import ErrorPage from './ErrorPage';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

function App() {
    
    // initialize state of user's input of movie title
    const [userInput, setUserInput] = useState('');
    // initialize state for searched movie list from user's input
    const [movieList, setMovieList] = useState([])
    // initialize state for movie ID and title of selected movie from movie list
    const [movieId, setMovieId] = useState('');
    const [movieTitle, setMovieTitle] = useState('');

    // take the value of user's input and update state upon onChange
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }
    
    // run API call on onSubmit event with user's input of movie title and returns the list of movies and update its state
    const handleSubmit = (event, userInput) => {
        event.preventDefault();
        axios({
            url: `https://api.themoviedb.org/3/search/movie?`,
            params: {
                api_key: `64c847f5af8190ca4e2eeab94df27f38`,
                query: userInput
            }
        }).then((res) => {
        // if users input incorrect movie title, provide them with an alert
            if (res.data.results.length === 0) {
                alert (`Oh no! You've inputted the incorrect Movie Title. Please try again!`);
            } else {
                setMovieList(res.data.results);
            }
        });
        // reset the state of userInput to an empty string
        setUserInput('');
    }

    // onClick event, which returns movie title and its id of selected movie and update states
    const handleSelect = (movieId, movieTitle) => {
        setMovieId(movieId)
        setMovieTitle(movieTitle)
        // reset the state of movie list to an empty array
        setMovieList([]);
    }

    // onClick event, reset the state of movie list to an empty array
    const handleClick = () => {
        setMovieList([]);
    }

return (
    <div className='wrapper'>
    <Header />
    
    <Routes>
        <Route path="/" element={<Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} userInput={userInput} handleSelect={handleSelect} movieList={movieList} handleClick={handleClick}/>} />
        <Route path="/gifsList" element={<MovieApi movieId={movieId} movieTitle={movieTitle} />} />
        <Route path="/saved" element={<SavedGifs />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    <Footer />
    </div>
);
}

export default App;

// Pseudo-code
// 1. Form component
// 	- retrieve and pass your input (movie title) to first movie API and return the data
//  - pass the data to display list of movies
//  - once selected, pass movie_ID and its title to MovieApi component as props
// 2. MovieApi component
// 	- receive the movie_ID & movie_title from ‘APP’ and run second axios to retrieve movie_keywords
// 	- Pass the keywords from movieDB as props to GiphyApi component
// 3. GiphyApi component
// 	- receive the keywords data-set from MovieApi component and run axios to search images (GIF)
// 	- pass GIF (image info) to Display component as props
// 4. Display component
// 	- receive image info from GiphyApi as props and return in <li>
//  - by using randomizer function, we only display images of 3 random keywords
//  - we pass the saved data to firebase
// 5. Saved component
//  - retreive the data from firebase and display the saved gifs
//  - function/button to remove the selected saved gifs from the firebase