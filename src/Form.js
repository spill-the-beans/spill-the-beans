import MovieApi from './MovieApi';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [userInput, setUserInput] = useState('');
    const [movieId, setMovieId] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    const handleClick = () => {
        // console.log(userInput);
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
    }




    return (
        <main>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="newMovie">Which movie do you want us to spill the beans on?</label>
                <input
                    type="text"
                    id="newMovie"
                    onChange={handleInputChange}
                />
                <button onClick={handleClick}>Spill it</button>
            </form>
            <MovieApi movieId={movieId} />
        </main>
    )

}

export default Form;