import axios from "axios";
import { useState, useEffect } from "react";

const MovieAPI = () => {
    const [userInput, setUserInput] = useState([]);

    let movieTitle = `Matrix`;

    useEffect(()=>{

        axios({

            url: `https://api.themoviedb.org/3/search/movie?`,
            params: {
                api_key: `64c847f5af8190ca4e2eeab94df27f38`,
                query: movieTitle
            }

        }).then((res)=>{
            // console.log(res.data.results[0].id);
            let movieId = res.data.results[0].id;

            axios({
                url: `https://api.themoviedb.org/3/movie/${movieId}/keywords?`,

                params: {
                    api_key: `64c847f5af8190ca4e2eeab94df27f38`

                }

            }).then((res)=>{
                console.log(res);
                
            })
            
        })

    }, [])

}

export default MovieAPI; 

