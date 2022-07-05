import axios from "axios";
import { useEffect, useState } from "react";
import DisplayGifs from "./DisplayGifs";

const GiphyApi = (props) => {
    
    const [gifs, setGifs] = useState([]);

    useEffect(()=> {
        axios({
            url: `https://api.giphy.com/v1/gifs/search`,

            params :{
                api_key: `lEiZYK3u60pEaJJovk7HWZXNpT7lYF5h`,
                q: props.keyword,
            }
            

        }).then((res)=>{
            console.log(res.data.data[0].images.original.webp);
            setGifs(res.data.data[0].images.original.webp);
        })

    },[])

    return (
        <>
        <DisplayGifs gifs={gifs}/>
        </>
    )

}

export default GiphyApi;