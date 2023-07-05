import React, { useEffect, useState} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import { Container, Row } from 'react-bootstrap';
import Header from './components/Header';
import MovieListHeader from './components/MovieListHeader';
import AddFavourites from './components/AddFavourites';
import RemoveFavourite from './components/RemoveFavourite';

const App = () => {
	const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
	const [favourites, setFavourites] = useState([]);

  const getMovieRequest = async(searchValue) =>{
    const movie_url = `http://www.omdbapi.com/?s=${searchValue}&apikey=ed0a2dbe`;

    const response = await fetch(movie_url);
    const response_json = await response.json();

    if (response_json.Search){
      setMovies(response_json.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue])

  const addFavourite =(movie)=>{
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    // saveToLocalStorage(newFavouriteList);
  }
  const removeFavourite =(movie)=>{
    const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);
		setFavourites(newFavouriteList);
    // saveToLocalStorage(newFavouriteList);
  }
  // useEffect(() => {
	// 	const movieFavourites = JSON.parse(
	// 		localStorage.getItem('react-movie-app-favourites')
	// 	);

	// 	setFavourites(movieFavourites);
	// }, []);

	// const saveToLocalStorage = (items) => {
	// 	localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	// };
 
 

	return (
    <>
      <Container fluid className='border-bottom border-secondary border-5'>
      <Row className='d-flex align-items-center mt-4 mb-4'>
      <Header text = 'MoviePedia' />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </Row>
      <Row className='pb-5 d-flex justify-content-center text-center'>
        <h4>All your favourites in one place!</h4>
      </Row>
      </Container>

      <Container className='movie-app py-4'>
        <MovieList
        className=''
        movies={movies}
         favouriteComponent={AddFavourites}
         handleFavouriteClick={addFavourite} />
     
      <Row className='row d-flex align-items-center mt-4 mb-4'>
				<MovieListHeader heading='Favourites' />
			</Row>
			<Row className='row'>
				<MovieList movies={favourites} favouriteComponent={RemoveFavourite}  handleFavouriteClick={removeFavourite} />
			</Row>
      </Container>
    </>
  
	);
};

export default App;
