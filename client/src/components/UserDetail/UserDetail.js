import React from 'react';
import { GithubContext } from '../Context/Context';
import Error from '../Error/Error';
import Repos from '../Charts/Repos';

import { MdWork, MdLocationOn } from 'react-icons/md';
import { FaBlog, FaRegCalendarCheck } from 'react-icons/fa';
import { RiArrowGoBackLine, RiTwitterLine } from 'react-icons/ri';
import { Container, Row, Col } from 'reactstrap';
import './UserDetail.css';

const UserDetail = () => {
    const { githubUser } = React.useContext(GithubContext);
    const {
        avatar_url,
        html_url,
        name,
        company,
        blog,
        bio,
        login,
        location,
        twitter_username,
        followers,
        following,
        public_repos,
        created_at
    } = githubUser;

    const userJoined = created_at.split("-");
    const year = userJoined[0]
    const day = userJoined[2].slice(0, 2);
    const months = [ "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];
    const month = months[Number(userJoined[1]) - 1];

    if (login === "not.loading.yet!") {
        return <Error />
    } 
    
    return (
        <Container className="user__container">
            <a className="user__back" href="/">
                <RiArrowGoBackLine  /> Back To Home
            </a>
            <Row>
                <Col>
                    <img className="user__avatar" src={avatar_url} alt="avatar" />
                </Col>
            </Row>
            <Row>
                <Col className="user__name">{name}</Col>
            </Row>
            <Row>
                <Col className="user__des">
                    <a className="user__username" href={html_url}>
                        @{login} 
                    </a>
                    <span><FaRegCalendarCheck /> Joined | {month} {day}, {year}</span>
                    {bio && <span> | {bio}</span>}
                </Col>
            </Row>
            <Row className="user__info">
                {location &&
                    <Col>
                        <MdLocationOn /> {location}
                    </Col>}
                {twitter_username &&
                    <Col>
                        <a href={`https://twitter.com/${twitter_username}`}>
                            <RiTwitterLine /> {twitter_username}
                        </a>    
                    </Col>}
                {company && <Col><MdWork /> {company}</Col>}
                {blog &&
                    <Col>
                        <a href={blog}>
                           <FaBlog /> {blog}
                        </a>
                    </Col>}
            </Row>

            {/* Followers/Following and Repos */}
            <Row>
                <Col className="user__card">
                    <span>Repos</span>
                    <p>{public_repos}</p>          
                </Col>
                <Col className="user__card">
                    <span>Followers</span>
                    <p>{followers}</p>
                </Col>
                <Col className="user__card">
                    <span>Following</span>
                    <p>{following}</p>  
                </Col>
            </Row>

            {/* Charts */}
            <Row>
                <Repos />
            </Row>
        </Container>
    )
}

export default UserDetail
