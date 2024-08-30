import NavBar from "./NavBar";
import {Container } from "react-bootstrap";
import Slider from "./Slider";
import Footer from "./Footer";

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <h2 className={'mt-3'}>Home Page</h2>
            </Container>
            <Footer></Footer>
        </div>
    )
}