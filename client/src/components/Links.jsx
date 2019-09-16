import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const Links = () => {
    return (
        <React.Fragment>
            <Link to="/" className="navbar-brand">
                My Third MERN Application
            </Link>
            <Collapse>
                <List>
                    <Item>
                        <Link to="/quiz" className="nav-link">
                            Quizzes
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/question" className="nav-link">
                            Questions
                        </Link>
                    </Item>
                    <Item>
                        <Link to="/score" className="nav-link">
                            Scores
                        </Link>
                    </Item>
                </List>
            </Collapse>
        </React.Fragment>
    )
}

export default Links