import './App.css';
import Header from './Header';
import Footer from './Footer';
import MovieAPI from './MovieAPI';
function App() {
  return (
    <div className="App">
      <Header />
      <MovieAPI />
      <Footer />
    </div>
  );
}

export default App;
