import {Container, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import logo from '../assets/Logo/logo100.png'
import ColorTheme from "./ColorTheme";
import HandleNavigation from "./HandleNavigation";
import '../App.css'

export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div>
            <Navbar expand="lg" className="navbar-bg">
                <Container>
                    <Navbar.Brand onClick={() => HandleNavigation(navigate,`/`)}>
                        <img src={logo} alt="logo" className={'logo'}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className={'text-white'} onClick={() => HandleNavigation(navigate,`/`)}>Home</Nav.Link>
                            <Nav.Link className={'text-white'} onClick={() => HandleNavigation(navigate,`/hair-makeup`)}>Hair & Make-up</Nav.Link>
                            <Nav.Link className={'text-white'} onClick={() => HandleNavigation(navigate,`/gallery`)}>Gallery</Nav.Link>
                            <Nav.Link className={'text-white'} onClick={() => HandleNavigation(navigate,`/dressing`)}>Bridal Dressing</Nav.Link>
                            <Nav.Link className={'text-white'} onClick={() => HandleNavigation(navigate,`/contactus`)}>Contact Us</Nav.Link>
                        </Nav>
                        <ColorTheme></ColorTheme>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}