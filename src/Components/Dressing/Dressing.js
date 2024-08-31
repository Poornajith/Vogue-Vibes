import NavBar from "../NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "../Slider";
import Footer from "../Footer";
import dressing from '../../assets/images/dressing.jpg'
export default function Dressing() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'mt-5'}>
                <h1>Bridal Dressing</h1>
                <p><strong>Your Dream Wedding Look Awaits</strong>Your wedding day is one of the most important
                    days of your life, and we're here to make sure you look and feel absolutely stunning.
                    At Vogue Vibes, our bridal specialists work closely with you to create the perfect look that
                    complements your style and vision.</p>
                <Row>
                    <Col>
                        <img src={dressing} alt="hair services Img" className={'img-home-1'}/>
                    </Col>
                    <Col className={'align-content-center'}>
                        <h3>Our Bridal Services:</h3>
                        <ul>
                            <li>Bridal Hair & Makeup</li>
                            <li>Bridesmaids' Styling</li>
                            <li>On-site Wedding Services</li>
                            <li>Pre-Wedding Beauty Packages</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <p>Let us take care of your bridal beauty needs, so you can focus on making memories that
                        last a lifetime.</p>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    )
}