import React from 'react';
import { Col, Row } from 'react-bootstrap';

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;
	return (
		<Row>
			{props.movies.map((movie, index) => (
        <Col key={index} className='poster-container d-flex justify-content-center m-3'>
					<img src={movie.Poster} alt='movie'></img>
          <div onClick={()=> props.handleFavouriteClick(movie)}
           className='overlay position-absolute w-auto d-flex align-items-center justify-content-center'>
					<FavouriteComponent />
		  </div>
          </Col>
			))}
		</Row>
	);
};

export default MovieList