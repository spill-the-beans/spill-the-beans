import axios from "axios";
import { useState, useEffect } from "react";
import GiphyApi from "./GiphyApi";

const MovieApi = (props) => {

    const [movieKeyword, setMovieKeyword] = useState([]);

    useEffect(() => {
        if (props.movieId){
            axios({
                url: `https://api.themoviedb.org/3/movie/${props.movieId}/keywords`,
                params: {
                    api_key: `64c847f5af8190ca4e2eeab94df27f38`
                }
            }).then((res) => {
                setMovieKeyword(res.data.keywords);
                console.log(res.data.keywords);
            })
            setMovieKeyword([])
        }
}, [props.movieId])

    return (
        movieKeyword.slice(0,3).map((keyword)=>{
            return (
                <GiphyApi key={keyword.id} keyword={keyword.name} />
            )
        })
    )
}

export default MovieApi;

