import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Adidas</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Hombre</Nav.Link>
                    <Nav.Link href="#features">Mujer</Nav.Link>
                    <Nav.Link href="#pricing">Niños</Nav.Link>
                </Nav>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBar

