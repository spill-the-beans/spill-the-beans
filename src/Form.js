import MovieApi from './MovieApi';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [userInput, setUserInput] = useState('');
    const [movieId, setMovieId] = useState('')

    // let movieId = '';

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setUserInput('');
    }

    useEffect(() => {
        axios({
            url: `https://api.themoviedb.org/3/search/movie?`,
            params: {
                api_key: `64c847f5af8190ca4e2eeab94df27f38`,
                query: userInput
            }
        }).then((res) => {
            setMovieId(res.data.results[0].id);

            console.log(movieId);
            axios({
                url: `https://api.themoviedb.org/3/movie/${movieId}/keywords?`,
                params: {
                    api_key: `64c847f5af8190ca4e2eeab94df27f38`
                }
            }).then((res) => {
                console.log(res);
            })
        })
    }, [userInput])    

    return (
        <main>
            <form action="submit">
                <label htmlFor="newMovie">Which movie do you want us to spill the beans on?</label>
                <input
                    type="text"
                    id="newMovie"
                    onChange={handleInputChange}
                    value={userInput}
                />
                <button onClick={handleSubmit}>Spill it</button>
            </form>
        </main>
    )

}

export default Form;