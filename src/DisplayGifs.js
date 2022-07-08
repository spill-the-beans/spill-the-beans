import { useState, useEffect } from "react";
import firebase from "./firebase";
import { getDatabase, push, ref, onValue } from 'firebase/database';
import SavedGifs from './SavedGifs';
import { Routes, Route } from 'react-router-dom';




const DisplayGifs = (props) => {
    console.log(props.gifs);
    // randomize the list of gif (array) index number
    const [randomIndex, setRandomIndex] = useState(0);

    const [savedGifs, setSavedGifs] = useState([]);

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

    useEffect(() => {

        const database = getDatabase(firebase);
        const dbRef = ref(database);

        onValue(dbRef, (response) => {

            const data = response.val();

            const newState = [];
            for (let key in data) {
                newState.push(
                    {
                        key: key,
                        title: data[key].title,
                        img: data[key].img,
                    }
                )
            }
            setSavedGifs(newState);
        });
    }, []);

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

                            <img onClick={handleClick} src={props.gifs[randomIndex].images.original.url} alt={props.gifs[randomIndex].title} />
                        </li>
                    </>
            }
            <Routes>
                <Route path="/savedgifs" element={<SavedGifs savedGifs={savedGifs} />} />
            </Routes>
        </>
    )
}

export default DisplayGifs;