import NothingFound from "./NothingFound";
import GiphyApi from "./GiphyApi";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const MovieApi = (props) => {

    // initialize state for keyword of passed movie ID
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
            })
            setMovieKeyword([]);
        }
    }, [props.movieId])

    // selecting only 3 keywords randomly
    useEffect( () => {
        setSelectedKeyword(movieKeyword.sort(() => 0.5 - Math.random()).slice(0,3))
    }, [movieKeyword])

    return (
        <main>
            <Link to="/"><button className="buttonTwo">Would you like to search another movie?</button></Link>
            <Link to="/saved"><button className="buttonTwo">Show my saved spoilers</button></Link>
            {   
                // If selected movie does NOT have any keywords, return following message
                movieKeyword.length === 0
                ?
                <>
                    <NothingFound />
                </>
                :
                <>
                {/* pass randomly selected 3 keywords to GiphyApi component */}
                    <h2>{props.movieTitle}</h2>
                    <p>is about</p>
                    <ul className="gifsList">
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
        </main>
    )
}

export default MovieApi;

