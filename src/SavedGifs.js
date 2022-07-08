import { useEffect, useState } from "react";
import { onValue, getDatabase, ref, remove } from "firebase/database"; 
import firebase from "./firebase";

const SavedGifs = (props) => {

    const [savedGifs, setSavedGifs] = useState([]);
    const [gifSlice, setGifSlice] = useState([]);

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
                    }
                )
            }
            setSavedGifs(newState);
        });
    }, []);  
    
    const handleRemove = (gifId) => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/${gifId}`);

        remove(dbRef);
    }

    return (
        <>
        <ul className="savedGifsContainer">

            {gifSlice.map((savedGif) => {
                console.log(savedGif);
                return (
                    <li key={savedGif.key}>
                        <button className="remove"
                            onClick={() => handleRemove(savedGif.key)}
                        >❌</button>
                        <h2>{savedGif.title}</h2>
                        <img src={savedGif.img} alt={savedGif.title} />
                    </li>
                )
            })
            }
        </ul>
        </>
    )
}

export default SavedGifs;