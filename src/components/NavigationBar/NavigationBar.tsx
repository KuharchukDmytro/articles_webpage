import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationLink } from '../NavigationLink/NavigationLink';
import { Link } from 'react-router-dom';

export const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" style={{ marginBottom: '16px' }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Navbar.Brand>Articles Webpage</Navbar.Brand>
        </Link>

        <div className='navbar-container'>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Item>
                  <NavigationLink to='/' title='Home' />
                </Nav.Item>

                <Nav.Item>
                  <NavigationLink to='/tenArticles' title='Random 10 articles' />
                </Nav.Item>

                <Nav.Item>
                  <NavigationLink to='/addArticle' title='Add article' />
                </Nav.Item>
              </Nav>
          </Navbar.Collapse>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
  );
}
