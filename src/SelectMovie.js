import { useState } from "react"
import MovieApi from "./MovieApi";
import { Link } from "react-router-dom";

const SelectMovie  = (props) => {

    const [movieId, setMovieId] = useState('');

    const [movieTitle, setMovieTitle] = useState('');

    const [select, setSelect] = useState(!props.select);
    

    // const selectTransformer = () => {
    //     setSelect(false);
    // }

    const handleSelect = (movieId, movieTitle) => {
            setMovieId(movieId)
            setMovieTitle(movieTitle)
            // window.scrollBy({ top: 1000, behavior: "smooth" })
            // selectTransformer();
            // if (!select) {
            //     setSelect(!select);

            // } else {
            //     setSelect(select);
            // }
            setSelect(!select);
    }

    return (
        <>
            {   
            !select
            ?
            <>
                <h2>{movieTitle}</h2>
                <ul>
                    {/* pass movie id to second movie API call in MovieApi component as props */}
                    <MovieApi movieId={movieId} movieTitle={movieTitle}/>
                </ul>
            </>
            :   
                props.movieList.map((movie) => {
                    return (
                        // <Link to="/gifsList">
                            <p onClick={()=>handleSelect(movie.id, movie.title)}>{movie.title}</p>
                        // </Link>
                    )
                })
            }
            {/* <h2>{movieTitle}</h2>
            <ul>
                {/* pass movie id to second movie API call in MovieApi component as props */}
                {/* <MovieApi movieId={movieId} movieTitle={movieTitle} /> */}
            {/* </ul> */}
        </>
    )
}

export default SelectMovie;