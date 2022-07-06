import axios from "axios";
import { useEffect, useState } from "react";
import DisplayGifs from "./DisplayGifs";

const GiphyApi = (props) => {

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        axios({
            url: `https://api.giphy.com/v1/gifs/search`,
            params: {
                api_key: `lEiZYK3u60pEaJJovk7HWZXNpT7lYF5h`,
                q: props.keyword,
            }
        }).then((res) => {

            const randomGif = Math.floor(Math.random() * res.data.data.length - 1);

            console.log(res.data.data[randomGif].images.original.webp);
            setGifs(res.data.data[randomGif].images.original.webp);
        })

    }, [])

    return (
        <>
            <DisplayGifs gifs={gifs} />
        </>
    )
}

export default GiphyApi;