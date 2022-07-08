import { useEffect, useState } from "react";

const SavedGifs = (props) => {

    const gifsArray = props.savedGifs;

    console.log(gifsArray);

    const [savedGifs, setSavedGifs] = useState();

    useEffect(() => {
        setSavedGifs(gifsArray.slice(0));

    }, [])


    return (
        <ul className="savedGifsContainer">
            {gifsArray.map((savedGif) => {
                console.log(savedGif);
                return (
                    <li key={savedGif.key}>
                        {/* <button className="remove"
                            onClick={() => props.handleRemove(savedMovie.key)}
                        >❌</button> */}
                        <h2>{savedGif.title}</h2>
                        <img src={savedGif.img} alt={savedGif.title} />
                    </li>
                )
            })
            }
        </ul>

    )
}

export default SavedGifs;