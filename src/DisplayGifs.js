import { useState, useEffect } from "react";
import firebase from "./firebase";
import { getDatabase, push, ref, onValue } from 'firebase/database';

const DisplayGifs = (props) => {
    console.log(props.gifs);
    // randomize the list of gif (array) index number
    const [randomIndex, setRandomIndex] = useState(0);

    // const [savedGifs, setSavedGifs] = useState([]);

    // onClick event, we want to return new random index number
    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * props.gifs.length));
    }

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
                            >✔️</button>

                            <img onClick={handleClick} src={props.gifs[randomIndex].images.original.url} alt={props.gifs[randomIndex].title} />
                        </li>
                    </>
            }
        </>
    )
}

export default DisplayGifs;