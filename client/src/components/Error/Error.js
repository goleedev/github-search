import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './Error.css';

function Error() {
    return (
        <Container className="error">
            <Row>
                <Col className="error__msg">
                    <h1>Oops ¯\_(ツ)_/¯</h1>
                    <p>We can't seem to find the page you're looking for</p>
                </Col>
            </Row>
            <Row className="error__back">
                <Col>
                    <Link to="/">
                        <ArrowBackIcon />
                        <span>Back To Home</span>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

export default Error
