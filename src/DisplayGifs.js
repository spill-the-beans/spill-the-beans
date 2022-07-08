import { useState } from "react";

const DisplayGifs = (props)=> {
    console.log(props.gifs);
    // randomize the list of gif (array) index number
    const [randomIndex, setRandomIndex] = useState(0);
    // onClick event, we want to return new random index number
    const handleClick = () => {
        setRandomIndex(Math.floor(Math.random() * props.gifs.length));
    }

    return(
        <>
            {
                props.gifs.length === 0
                ?
                <p>no data</p>
                :
                <li onClick={handleClick}>
                    <img src={props.gifs[randomIndex].images.original.url} alt={props.gifs[randomIndex].title} />
                </li>
            }
        </>
    )
}

export default DisplayGifs;