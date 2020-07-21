import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Container, Row, Col } from 'reactstrap';
import { Doughnut } from 'react-chartjs-2';
import './UserDetail.css';

function UserDetail() {
    const [userName, setUserName] = useState('');

    return (
        <Container className="user__container">
            <Link to="/">
                <ArrowBackIcon className="user__icon" />
            </Link>
            <Row>
                <Col className="text-center">Img</Col>
            </Row>
            <Row>
                <Col className="text-center">Name</Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <span>0</span>
                    <span>Repository</span>
                </Col>
                <Col className="text-center">
                    <span>0</span>
                    <span>Follower</span>
                </Col>
                <Col className="text-center">
                    <span>0</span>
                    <span>Following</span>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">chart 1</Col>
                <Col className="text-center">chart 2</Col>
                <Col className="text-center">chart 3</Col>
            </Row>
        </Container>
    )
}

export default UserDetail
