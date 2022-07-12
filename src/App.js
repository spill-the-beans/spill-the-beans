import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import { Routes, Route } from 'react-router-dom';
import SavedGifs from './SavedGifs';
import ErrorPage from './ErrorPage';
import DisplayGifs from './DisplayGifs';
import MovieApi from './MovieApi';
import { useState } from 'react';
import axios from 'axios';
import SelectMovie from './SelectMovie';

function App() {
  const [userInput, setUserInput] = useState('');

    // initialize state for movie ID of searched movie with user's input
    // const [movieId, setMovieId] = useState('');

    // const [movieTitle, setMovieTitle] = useState('');

    const [movieList, setMovieList] = useState([])

    // useEffect( () => {
    //     setMovieList(res.data.results.map(() => {}))
    // } )

    // take the value of user's input and update state upon onChange
    const handleInputChange = (event, input) => {
        setUserInput(event.target.value);
    }
    // const [select, setSelect] = useState(false);
    
    // run API call on onSubmit event with user's input movie title and returns its id and update state of movieId
    const handleSubmit = (event, userInput) => {
        event.preventDefault();
        axios({
            url: `https://api.themoviedb.org/3/search/movie?`,
            params: {
                api_key: `64c847f5af8190ca4e2eeab94df27f38`,
                query: userInput
            }
        }).then((res) => {
            console.log(res.data.results);
            // setMovieId(res.data.results[0].id);
            // setMovieTitle(res.data.results[0].title)
            setMovieList(res.data.results);
        })
        // reset the state of userInput and movieID to an empty string
        setUserInput('');
        
        // setMovieId('');
        // setMovieTitle('');
        
    }
    console.log(movieList);
    // const handleSelect = () => {
    //     setSelect(!select);
    // }
    // console.log(movieList);
    const [movieId, setMovieId] = useState('');

    const [movieTitle, setMovieTitle] = useState('');

    // const [select, setSelect] = useState(false);
    

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
            // setSelect(!select);
            console.log(movieId);
            console.log(movieTitle);
            setMovieList([]);
    }
  return (
    <div className='wrapper'>
      <Header />
      
      <Routes>
        <Route path="/" element={<Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} userInput={userInput} handleSelect={handleSelect} movieList={movieList}/>}>
        </Route>
        {/* <Route path="/movieList" element={<SelectMovie movieList={movieList}/>} /> */}
        <Route path="/gifsList" element={<MovieApi movieId={movieId} movieTitle={movieTitle}/>}/>
        <Route path="/saved" element={<SavedGifs />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      {/* <SelectMovie movieList={movieList}/> */}
      <Footer />
    </div>
  );
}

export default App;


// Pseudo-code
// 1. Form component
// 	- retrieve and pass your input (movie title) to movie API and return the data
// 		: useState: const [userInput, setUserInput] = useState([])
// 		: Using axios, we retrieve ‘movie-keyword’ data from movieDB API
// 			useEffect ( () => {
// 							axios({
// 								url:
// 								params: {
// 										api_key:
// 										}
// 								}).then(res) => {
// 								setUserInput(res);
// 								}};
// 					}, []);
// 	- pass the data-set with movie_ID to MovieApi component as props
// 2. MovieApi component
// 	- receive the movie_ID from ‘Form’ and run axios to retrieve movie_keywords
// 	- Pass the keywords from movieDB as props to GiphyApi component
// 3. GiphyApi component
// 	- receive the keywords data-set from MovieApi component and run axios to search images (GIF)
// 		: we only want to display 3 keywords so we might want to use loop
// 	- pass GIF (image info) to Display component as props
// 4. Display component
// 	- receive image info from GiphyApi as props and return in <li>
// 		: as a stretch goal, we can add ‘click - eventListener’ to display next index GIF once clicked