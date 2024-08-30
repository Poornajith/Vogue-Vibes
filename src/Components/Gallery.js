import NavBar from "./NavBar";
import {Container} from "react-bootstrap";
import Footer from "./Footer";
export default function Gallery() {
    return(
        <div>
            <NavBar></NavBar>
            <Container>
                <h1>Gallery</h1>
            </Container>
            <Footer></Footer>
        </div>
    )
}