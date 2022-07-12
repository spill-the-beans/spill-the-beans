import axios from "axios";
import { useState, useEffect } from "react";
import GiphyApi from "./GiphyApi";
import { Link } from "react-router-dom";
const MovieApi = (props) => {

    // initialize state for movie keyword of passed movie ID from Form component
    const [movieKeyword, setMovieKeyword] = useState([]);
    // initialize state for selected keyword once retrieved from 2nd movie api call
    const [selectedKeyword, setSelectedKeyword] = useState([]);

    // on component mount
    useEffect(() => {
        if (props.movieId){
            // make an another axios call to get a list of movie keywords from movie ID
            axios({
                url: `https://api.themoviedb.org/3/movie/${props.movieId}/keywords`,
                params: {
                    api_key: `64c847f5af8190ca4e2eeab94df27f38`
                }
            }).then((res) => {
                setMovieKeyword(res.data.keywords);
                console.log(res.data.keywords);
            })
            setMovieKeyword([]);
        }
    }, [props.movieId])

    // selecting only 3 keywords randomly
    useEffect( () => {
        setSelectedKeyword(movieKeyword.sort(() => 0.5 - Math.random()).slice(0,3))
    }, [movieKeyword])

    return (
        <>
        <Link to="/"><button>Would you like to search another movie?</button></Link>
        <Link to="/saved"><button className="buttonTwo">Show my saved spoilers</button></Link>
        {
            movieKeyword.length === 0
            ?
            <>
            <h3>Nothing found under</h3>
            <h2>{props.movieTitle}</h2>
            <p>please try another one</p>
            </>
            :
            <>
            <h2>{props.movieTitle}</h2>
            <ul>
                
        {/* pass randomly selected 3 keywords to GiphyApi component */}
            {
                
                selectedKeyword.map((keyword) => {
                    return (
                        <GiphyApi key={keyword.id} keyword={keyword.name} movieTitle={props.movieTitle}/>
                        )
                    })
                }
                </ul>
                </>
        }
        
        </>
    )
}

export default MovieApi;

