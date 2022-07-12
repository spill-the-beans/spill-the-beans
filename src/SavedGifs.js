import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { onValue, getDatabase, ref, remove } from "firebase/database";

const SavedGifs = () => {

    // initialize state saved gifs from firebase
    const [savedGifs, setSavedGifs] = useState([]);
    const [gifSlice, setGifSlice] = useState([]);

    // setting the order of saved gifs
    useEffect(() => {
        setGifSlice(savedGifs.slice(0).reverse());
    }, [savedGifs])

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
                        keyword: data[key].keyword
                    }
                )
            }
            setSavedGifs(newState);
        });
    }, []);

    // onClick event, removes the saved gif from firebase
    const handleRemove = (gifId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${gifId}`);

        remove(dbRef);
    }

    return (
        <>
            <Link to="/"><button>Go BACK to HOMEPAGE</button></Link>

            <ul className="savedGifsContainer">
                {
                    gifSlice.map((savedGif) => {
                        return (
                            <li key={savedGif.key}>
                                <button className="remove" onClick={ () => handleRemove(savedGif.key) }>❌</button>
                                <h2>{savedGif.title}</h2>
                                <img src={savedGif.img} alt={savedGif.title} />
                                <h4>{savedGif.keyword}</h4>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SavedGifs;