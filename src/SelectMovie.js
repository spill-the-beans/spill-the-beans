// import { useState } from "react"
// import MovieApi from "./MovieApi";
// import { Link } from "react-router-dom";

// const SelectMovie  = (props) => {
//     console.log(props);
//     // const [movieId, setMovieId] = useState('');

//     // const [movieTitle, setMovieTitle] = useState('');

//     // // const [select, setSelect] = useState(false);
    

//     // // const selectTransformer = () => {
//     // //     setSelect(false);
//     // // }

//     // const handleSelect = (movieId, movieTitle) => {
//     //         setMovieId(movieId)
//     //         setMovieTitle(movieTitle)
//     //         // window.scrollBy({ top: 1000, behavior: "smooth" })
//     //         // selectTransformer();
//     //         // if (!select) {
//     //         //     setSelect(!select);

//     //         // } else {
//     //         //     setSelect(select);
//     //         // }
//     //         // setSelect(!select);
//     //         console.log(movieId);
//     //         console.log(movieTitle);
//     // }

//     return (
//         <>
//             {   
            
//                 props.movieList.map((movie) => {
//                     return (
//                         <Link to="/gifsList">
//                             <p onClick={()=>handleSelect(movie.id, movie.title)}>{movie.title}</p>
//                         </Link>
//                     )
//                 })
//             }
//             {/* <MovieApi movieId={movieId} movieTitle={movieTitle} /> */}
//             {/* <h2>{movieTitle}</h2>
//             <ul>
//                 {/* pass movie id to second movie API call in MovieApi component as props */}
//                 {/* <MovieApi movieId={movieId} movieTitle={movieTitle} /> */}
//             {/* </ul> */}
//         </>
//     )
// }

// export default SelectMovie;