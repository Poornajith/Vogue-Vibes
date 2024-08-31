import NavBar from "./NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "./Slider";
import Footer from "./Footer";
import img_home from '../assets/slider/3.jpg'

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container>
                <h2 className={'mt-5'}>Welcome to Vogue Vibes Where Beauty Meets Expertise.</h2>
                <p>At Vogue Vibes, we believe in enhancing your natural beauty with the perfect blend
                    of artistry and innovation. From flawless haircuts to stunning makeup looks, our
                    team of experts is here to bring your beauty vision to life. Step into a world of
                    luxury and leave with confidence.</p>
                <Row>
                    <Col>
                        <img src={img_home} className={'img-home-1'} alt="Bridal Dressing Img"/>
                    </Col>
                    <Col className={'align-content-center'}>
                        <h6>Why Choose Us?</h6>
                        <ul>
                            <li>Top-tier stylists and makeup artists</li>
                            <li>Premium products for ultimate care</li>
                            <li>Relaxing, spa-like environment</li>
                            <li>Personalized services tailored to your needs</li>
                        </ul>
                        <p>Book your appointment today and experience the transformation!
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}