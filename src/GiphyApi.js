import axios from "axios";
import { useEffect, useState } from "react";
import DisplayGifs from "./DisplayGifs";

const GiphyApi = (props) => {

    // initialize state for gifs of passed movie keyword from MovieApi component
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        // make an axios call to get a list of gif for each movie keywords passed from Movie Api
        axios({
            url: `https://api.giphy.com/v1/gifs/search`,
            params: {
                api_key: `lEiZYK3u60pEaJJovk7HWZXNpT7lYF5h`,
                q: props.keyword,
            }
        }).then((res) => {
            setGifs(res.data.data);
        })

    }, [props.keyword])

    return (
        <>
            <DisplayGifs gifs={gifs} movieTitle={props.movieTitle} movieKeyword={props.keyword}/>
        </>
    )
}

export default GiphyApi;