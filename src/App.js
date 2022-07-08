import './App.css';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import { Routes, Route } from 'react-router-dom';
import SavedGifs from './SavedGifs';

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Form />}></Route>
        <Route path="/savedgifs" element={<SavedGifs />} />
      </Routes>
      
      <Footer />
    </>
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