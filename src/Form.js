import { Link } from 'react-router-dom';

const Form = (props) => {

    return (
        <main>
            <div className="formFlex">
                <form action="submit" onSubmit={event => props.handleSubmit(event, props.userInput)}>
                    <label htmlFor="newMovie">Which movie do you want us to spill the beans on?</label>
                    <input
                        required
                        type="text"
                        id="newMovie"
                        onChange={event => props.handleInputChange(event)}
                        value={props.userInput}
                    />
                    <button>Spill it</button>
                </form>
                
                <Link to="/saved"><button onClick={()=>props.handleClick()}className="buttonTwo">Show my saved spoilers</button></Link>
            </div>
            
            <ul className='movieList'>
            {
                props.movieList.map((movie) => {
                    return (
                        <Link to="/gifsList">
                            <li onClick={()=>props.handleSelect(movie.id, movie.title)} key={movie.id}>{movie.title}</li>
                        </Link>
                    )
                })
            }
            </ul>
        </main >
    )
}

export default Form;