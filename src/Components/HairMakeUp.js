import NavBar from "./NavBar";
import Slider from "./Slider";
import Footer from "./Footer";
import {Col, Row, Container} from "react-bootstrap";
import hair from '../assets/images/hair.jpg'
import makeup from '../assets/images/makeup.jpg'
import '../index.css'
export default function HairMakeUp() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'mt-5'}>
                <h1>Hair & Makeup</h1>
                <p><strong> Transform Your Look</strong> At Vogue Vibes, we specialize in creating hair and makeup styles that
                    turn heads. Whether you're looking for a chic haircut, vibrant color, or a glamorous
                    makeup look, our talented team is here to make it happen.</p>
                <Row>
                    <Col>
                        <img src={hair} alt="hair services Img" className={'img-home-1'}/>
                    </Col>
                    <Col className={'align-content-center'}>
                        <h3>Hair Services:</h3>
                        <ul>
                            <li>Custom Haircuts</li>
                            <li>Coloring & Highlights</li>
                            <li>Blowouts & Styling</li>
                            <li>Hair Extensions & Treatments</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className={'align-content-center'}>
                        <h3>Makeup Services:</h3>
                        <ul>
                            <li>Bridal & Event Makeup</li>
                            <li>Day & Evening Looks</li>
                            <li>Airbrush Makeup</li>
                            <li>Lash & Brow Enhancements</li>
                        </ul>
                    </Col>
                    <Col>
                        <img src={makeup} alt="makeup services Img" className={'img-home-1'}/>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </div>
    )
}