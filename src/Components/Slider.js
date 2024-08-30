import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../index.css'
import '../App.css'
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
export default function Slider() {
    const navigate = useNavigate()
    return(
        <div className={'slider'}>
            <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="p-5 slider-div slider-div-1 text-white">
                    <div className="slider-txt mt-3 py-2">
                        <h1>Elevate Your Beauty. Elevate Your Confidence.</h1>
                        <h6>Experience the epitome of luxury beauty. Elevate your style, elevate your confidence.</h6>
                        < Button className={'m-1 btn-pink'} onClick={() => navigate('/contactus')}>Schedule an
                            Occasion</Button>
                    </div>
                </div>
                <div className={'p-5 slider-div slider-div-2 text-white'}>
                    <div className="slider-txt mt-3 py-2">
                        <h1>Transform Your Look</h1>
                        <h6>Tailored beauty solutions just for you. Your vision, our expertise.</h6>
                        <Button className={'m-1 btn-pink'} onClick={() => navigate('/contactus')}>Contact Us</Button>
                    </div>
                </div>
                <div className={'p-5 slider-div slider-div-3 text-white'}>
                    <div className="slider-txt mt-3 py-2">
                        <h1>Relax, Renew, Rejuvenate</h1>
                        < h6> Achieve the look you've always dreamed of. Your beauty goals, realized.</h6>
                        <Button className={'m-1 btn-pink'} onClick={() => navigate('/contactus')}>Let's Do it</Button>
                    </div>
                </div>
                <div className={'p-5 slider-div slider-div-4 text-white'}>
                    <div className="slider-txt mt-3 py-2">
                        <h1>Reimagine Your Beauty</h1>
                        < h6>
                            Discover your unique beauty potential. We'll help you shine.
                        </h6>
                        <Button className={'m-1 btn-pink'} onClick={() => navigate('/contactus')}>Start Your
                            Dressing</Button>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}