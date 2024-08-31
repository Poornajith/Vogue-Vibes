import {Container, Row} from "react-bootstrap";
import HandleNavigation from "./HandleNavigation";
import {useNavigate} from "react-router-dom";
import '../index.css'
import lin from '../assets/social icons/linkedin.svg'
import fb from '../assets/social icons/facebook.svg'
import tiktok from '../assets/social icons/tiktok.svg'
import yt from '../assets/social icons/youtube.svg'
export default function Footer() {
    const navigate = useNavigate()
    return(
        <div className={'mt-5 py-5 navbar-bg text-white'}>
            <Container className={'my-5'}>
                <Row className="">
                    <h6 onClick={() => HandleNavigation(navigate, `/`)} className={'my-3'}>
                        Home
                    </h6>
                    <h6 onClick={() => HandleNavigation(navigate, `/hair-makeup`)} className={'my-3'}>
                        Hair & Make-up
                    </h6>
                    <h6 onClick={() => HandleNavigation(navigate, `/gallery`)} className={'my-3'}>
                        Gallery
                    </h6>
                    <h6 onClick={() => HandleNavigation(navigate, `/dressing`)} className={'my-3'}>
                        Bridal Dressing
                    </h6>
                    <h6 onClick={() => HandleNavigation(navigate, `/contactus`)} className={'my-3'}>
                        Contact Us
                    </h6>
                </Row>
                <div className={'d-flex flex-wrap'}>
                    <img src={fb} alt="facebook" className="sm-icon m-3"/>
                    <img src={lin} alt="linkedIn" className="sm-icon m-3"/>
                    <img src={yt} alt="Youtube" className="sm-icon m-3"/>
                    <img src={tiktok} alt="tiktok" className="sm-icon m-3"/>
                </div>
            </Container>
        </div>
    )
}