import { useState } from "react";

const DisplayGifs = (props)=> {
    // console.log(props.gifs);
    const displayGif = props.gifs;
    // displayGif(props.gifs.map());
    // console.log(displayGif.length);
    // const [displayGif, setDisplayGif] = useState([]);

    // useEffect( () => {
    //     setDisplayGif(props.gifs);
    // },[props.gifs] )

    // randomize the list of gif (array) index number
    // const randomGif = Math.floor(Math.random() * displayGif.length);

    const [randomIndex, setRandomIndex] = useState(0);
    // const [randomIndex, setRandomIndex] = useState(0);

    const handleClick = () => {
        // if (randomGif === displayGif.length - 1) {
        //     setRandomIndex(0);
        // } else {
        //     setRandomIndex(randomIndex + 1);
        // }
        if (randomIndex === displayGif.length - 1) {
            setRandomIndex(0);
        } else {
            setRandomIndex(randomIndex + 1);
        }
        // if (randomGif < displayGif.length - 1) {
        //     setRandomIndex(randomGif + 1);
        // } else {
        //     setRandomIndex(0);
        // }
        // setRandomIndex(randomGif);
    }
    // const nextGif = function() {
    // }
    // console.log(randomGif);
    console.log(randomIndex);


    return(
        <>
            {
                displayGif.length === 0
                ?
                <p>no data</p>
                :
                <li onClick={handleClick}>
                    <img src={displayGif[randomIndex].images.original.url} alt="gifs" />
                </li>
            }
        </>
    )
}

export default DisplayGifs;