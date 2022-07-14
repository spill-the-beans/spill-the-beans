import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { onValue, getDatabase, ref, remove } from "firebase/database";

const SavedGifs = () => {

    // initialize state saved gifs from firebase
    const [savedGifs, setSavedGifs] = useState([]);
    const [groupGif, setGroupGif] = useState({});

    // setting the order of saved gifs
    useEffect(() => {
        const groupList = savedGifs.reduce((groupedGif, gif) => {
        const title = gif.title
        if (groupedGif[title] == null) groupedGif[title] = []
            groupedGif[title].push(gif)
            return groupedGif
        }, {})
    setGroupGif(groupList);
    }, [savedGifs])

    console.log(groupGif);

    const newArray = Object.values(groupGif);
    console.log(newArray);
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
        <main>
            <Link to="/"><button>Go BACK to HOMEPAGE</button></Link>

            <ul className="savedGifsContainer">
                {
                    sortedGifs.map((savedGif) => {
                        return (
                            <li key={savedGif.key}>
                                <button className="remove" onClick={ () => handleRemove(savedGif.key) }>❌</button>
                                <h2>{savedGif.title}</h2>
                                <div className="savedGifImageContainer">
                                    <img src={savedGif.img} alt={savedGif.title} />
                                    <h4>{savedGif.keyword}</h4>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

export default SavedGifs;