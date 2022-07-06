import MovieApi from './MovieApi';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {

    // initialize state user's input of movie title
    const [userInput, setUserInput] = useState('');
    // initialize state for movie ID of searched movie with user's input
    const [movieId, setMovieId] = useState('');

    // take the value of user's input and update state upon onChange
    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    // run API call on onSubmit event with user's input movie title and returns its id and update state of movieId
    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput) {
            axios({
                url: `https://api.themoviedb.org/3/search/movie?`,
                params: {
                    api_key: `64c847f5af8190ca4e2eeab94df27f38`,
                    query: userInput
                }
            }).then((res) => {
                console.log(res.data.results[0]);
                setMovieId(res.data.results[0].id);
            })
        }
        setUserInput('');
    }

    return (
        <main>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="newMovie">Which movie do you want us to spill the beans on?</label>
                <input
                    type="text"
                    id="newMovie"
                    onChange={handleInputChange}
                    value={userInput}
                />
                <button>Spill it</button>
            </form>
            <ul>
                <MovieApi movieId={movieId} />
            </ul>
        </main>
    )

}

export default Form;