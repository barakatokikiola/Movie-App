import React from "react";
import { Col } from "react-bootstrap";

const Header = (props) => {
  return (
    <Col>
      <h1 className="title">{props.text}</h1>
    </Col>
  );
};

export default Header;