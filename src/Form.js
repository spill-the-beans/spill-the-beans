import MovieApi from './MovieApi';
import { useState } from 'react';
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import SelectMovie from './SelectMovie';

const Form = (props) => {

    // initialize state user's input of movie title
    // const [userInput, setUserInput] = useState('');

    // // initialize state for movie ID of searched movie with user's input
    // // const [movieId, setMovieId] = useState('');

    // // const [movieTitle, setMovieTitle] = useState('');

    // const [movieList, setMovieList] = useState([])

    // // useEffect( () => {
    // //     setMovieList(res.data.results.map(() => {}))
    // // } )

    // // take the value of user's input and update state upon onChange
    // const handleInputChange = (event) => {
    //     setUserInput(event.target.value);
    // }
    // // const [select, setSelect] = useState(false);
    
    // // run API call on onSubmit event with user's input movie title and returns its id and update state of movieId
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     axios({
    //         url: `https://api.themoviedb.org/3/search/movie?`,
    //         params: {
    //             api_key: `64c847f5af8190ca4e2eeab94df27f38`,
    //             query: userInput
    //         }
    //     }).then((res) => {
    //         console.log(res.data.results);
    //         // setMovieId(res.data.results[0].id);
    //         // setMovieTitle(res.data.results[0].title)
    //         setMovieList(res.data.results);
    //     })
    //     // reset the state of userInput and movieID to an empty string
    //     setUserInput('');
        
    //     // setMovieId('');
    //     // setMovieTitle('');
        
    // }
    // // const handleSelect = () => {
    // //     setSelect(!select);
    // // }
    // console.log(movieList);
    // const handleSelect = (movieId, movieTitle) => {
    //     setMovieId(movieId)
    //     setMovieTitle(movieTitle)
    // }
    return (
        <main>
            <div className="formFlex">
                <form action="submit" onSubmit={event => props.handleSubmit(event, props.userInput)}>
                    <label htmlFor="newMovie">Which movie do you want us to spill the beans on?</label>
                    <input
                        required
                        type="text"
                        id="newMovie"
                        onChange={event => props.handleInputChange(event)}
                        value={props.userInput}
                    />
                    <button>Spill it</button>
                </form>
            </div>
            <Link to="/saved"><button className="buttonTwo">Show my saved spoilers</button></Link>
            
            {/* <SelectMovie movieList={movieList} /> */}
            <ul>
            {
                props.movieList.map((movie) => {
                    return (
                        <Link to="/gifsList">
                        <li onClick={()=>props.handleSelect(movie.id, movie.title)} key={movie.id}>{movie.title}</li>
                        </Link>
                    )
                })
            }
            </ul>
            {/* <h2 id="gifList">{movieTitle}</h2>
            <ul> */}
                {/* pass movie id to second movie API call in MovieApi component as props */}
                {/* <MovieApi movieId={movieId} movieTitle={movieTitle} /> */}
            {/* </ul> */}
            {/* <Outlet /> */}
        </main >
    )
}

export default Form;