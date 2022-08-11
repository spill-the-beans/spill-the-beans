# Spill The Beans

## About The Project
A movie spoiler app that generates three random GIFs of any searched and selected movies. 

[Live Link](https://spillthebeans.netlify.app/)
[<img width="1676" alt="projectSpillTheBeans" src="https://user-images.githubusercontent.com/97327628/184100248-4b8ffa65-b2d5-405d-be13-4282c12b5fa1.png">](https://spillthebeans.netlify.app/)

## Built With
- HTML5
- CSS3
- RESTful APIs
- Firebase
- React
- JSX

## Features
- React hooks and routing ultilized to efficiently render the multiple pages.
- The data is stored in Firebase for accessing and modifying
- new random GIF is displayed on click
- Movie keyword data retreived from RESTful API, [TMDB](https://api.themoviedb.org/)
- GIFs retreived from RESTful API, [Giphy](https://api.giphy.com/)
- React components used to follow best practices
- Saved GIFs are sorted and displayed by movie titles

## Pseudo-code
1. Form component
    - retrieve and pass your input (movie title) to first movie API and return the data
    - pass the data to display list of movies
    - once selected, pass movie_ID and its title to MovieApi component as props
2. MovieApi component
    - receive the movie_ID & movie_title from ‘APP’ and run second axios to retrieve movie_keywords
    - Pass the keywords from movieDB as props to GiphyApi component
3. GiphyApi component
    - receive the keywords data-set from MovieApi component and run axios to search images (GIF)
    - pass GIF (image info) to Display component as props
4. Display component
    - receive image info from GiphyApi as props and return in `li`
    - by using randomizer function, we only display images of 3 random keywords
    - we pass the saved data to firebase
5. Saved component
    - retreive the data from firebase and display the saved gifs
    - function/button to remove the selected saved gifs from the firebase

## Running this project locally
1. `cd into the project directory`
2. Clone this project locally by typing `git clone https://github.com/spill-the-beans/spill-the-beans.git`
3. Run `npm install` in your bash / command line
4. Run `npm start` in your bash / command line

## ToDo List
- Add/Modify functionality and firebase data structure on saved GIFs
  - Display them under movie titles and sort by keyword (or in carousel)
  - Not to display already saved GIFs
