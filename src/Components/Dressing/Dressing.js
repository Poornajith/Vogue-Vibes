import NavBar from "../NavBar";
import { Container } from "react-bootstrap";
import Slider from "../Slider";
import Footer from "../Footer";
export default function Dressing() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <h1>Bridal Dressing</h1>
            </Container>
            <Footer></Footer>
        </div>
    )
}