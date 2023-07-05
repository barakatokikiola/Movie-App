import React from 'react';
import { Col } from 'react-bootstrap';

const SearchBox = (props) =>{
    return(
    <Col>
        <input
        className='form-control'
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder='Type to search...'>
        </input>
    </Col>
    )

}


export default SearchBox;