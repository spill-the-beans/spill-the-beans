import { useState } from "react";
import firebase from "./firebase";
import { getDatabase, push, update, ref } from 'firebase/database';

const DisplayGifs = (props) => {
    
    // randomize the list of gif (array) index number
    const [randomIndex, setRandomIndex] = useState(()=>Math.floor(Math.random() * 50));
    // const [savedGifs, setSavedGifs] = useState([]);
    
    // onClick event, we want to return new random index number
    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * props.gifs.length));
    }

    // onClick event, user can push and save the displayed gif into firebase
    const handleSave = (savedMovie, savedId, savedGifs, savedKeyword) => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        // let title = savedMovie;
        const gifObject = {
            'movie': {
            'title': savedMovie,
            'description': {
            'key': savedId,
            'img': savedGifs,
            'keyword': savedKeyword
            }
        }
        }
        update(dbRef, gifObject);
    }

    return (
        <>
            {
                props.gifs.length === 0
                    ?
                    <p>no data</p>
                    :
                    <>
                        <li key={props.gifs[randomIndex].id}>
                            <button
                                onClick={() => handleSave(props.movieTitle, props.gifs[randomIndex].id, props.gifs[randomIndex].images.original.url, props.movieKeyword)}
                            >Keep it!</button>
                            <div className="gifContainer" onClick={handleClick}>
                                <p>Click me!</p>
                                <img  src={props.gifs[randomIndex].images.original.url} alt={props.gifs[randomIndex].title} />
                            </div>
                                <h4>{props.movieKeyword}</h4>
                        </li>
                    </>
            }
        </>
    )
}

export default DisplayGifs;