import { useState } from "react";
import firebase from "./firebase";
import { getDatabase, push, ref } from 'firebase/database';

const DisplayGifs = (props) => {
    // randomize the list of gif (array) index number
    const [randomIndex, setRandomIndex] = useState(0);

    // const [savedGifs, setSavedGifs] = useState([]);

    // onClick event, we want to return new random index number
    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * props.gifs.length));
    }

    // onClick event, user can push and save the displayed gif into firebase
    const handleSave = (savedId, savedMovie, savedGifs) => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        const gifObject = {
            'key': savedId,
            'title': savedMovie,
            'img': savedGifs
        }
        push(dbRef, gifObject);
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
                                onClick={() => handleSave(props.gifs[randomIndex].id, props.movieTitle, props.gifs[randomIndex].images.original.url)}
                            >Keep it!</button>
                            <div className="gifContainer">
                                <p>Click me!</p>
                                <img onClick={handleClick} src={props.gifs[randomIndex].images.original.url} alt={props.gifs[randomIndex].title} />
                            </div>
                                <h4>{props.movieKeyword}</h4>
                        </li>
                    </>
            }
        </>
    )
}

export default DisplayGifs;