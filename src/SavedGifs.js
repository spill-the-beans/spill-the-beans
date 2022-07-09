import { useEffect, useState } from "react";
import { onValue, getDatabase, ref, remove } from "firebase/database"; 
import firebase from "./firebase";
import { Link } from "react-router-dom";

const SavedGifs = () => {

    const [savedGifs, setSavedGifs] = useState([]);
    // const [gifSlice, setGifSlice] = useState([]);
    const [groupGif, setGroupGif] = useState({})

    useEffect(() => {
        // setGifSlice(savedGifs.slice(0).reverse());
        // setGroupGif(savedGifs.reduce((groupedGif, gif) => {
            // const title = gif.title
            // if (groupedGif[title] == null) groupedGif[title] = []
            // groupedGif[title].push(gif)
        //     return groupedGif
        const groupList = savedGifs.reduce((groupedGif, gif) => {
            // groupedGif[gif.title] = (groupedGif[gif.title] || []).concat(gif)
            const title = gif.title
            if (groupedGif[title] == null) groupedGif[title] = []
            groupedGif[title].push(gif)
            return groupedGif
        }, {})
        setGroupGif(groupList);

    }, [savedGifs])
    
    const newArray = Object.values(groupGif);
    
    const sortedGifs = newArray.flat();
    
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
        <Link to="/"><button>Go BACK to HOEMPAGE</button></Link>
        <ul className="savedGifsContainer">

            {sortedGifs.map((savedGif) => {
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