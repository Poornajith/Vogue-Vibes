import NavBar from "../NavBar";
import {Container} from "react-bootstrap";
import Footer from "../Footer";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/galery/1.jpg'
import img2 from '../../assets/galery/2.jpg'
import img3 from '../../assets/galery/3.jpg'
import img4 from '../../assets/galery/4.jpg'
import img5 from '../../assets/galery/5.jpg'
import img6 from '../../assets/galery/6.jpg'
import img7 from '../../assets/galery/7.jpg'
import img8 from '../../assets/galery/8.jpg'
import Slider from "../Slider";
export default function Gallery() {
    return(
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <Container className={'mt-5'}>
                <h1>Gallery</h1>
                <p><strong>Our Work Speaks for Itself</strong> Browse our gallery to see the stunning transformations
                    we've created for our clients. From elegant bridal looks to edgy haircuts,
                    our portfolio showcases our commitment to beauty and excellence.</p>
                <div className="m-3 d-flex flex-wrap">

                </div>
                <Carousel showThumbs={true} autoPlay={true} infiniteLoop={true}>
                    <img src={img1} alt="gallery image" className={'m-1'}/>
                    <img src={img2} alt="gallery image" className={'m-1'}/>
                    <img src={img3} alt="gallery image" className={'m-1'}/>
                    <img src={img4} alt="gallery image" className={'m-1'}/>
                    <img src={img5} alt="gallery image" className={'m-1'}/>
                    <img src={img6} alt="gallery image" className={'m-1'}/>
                    <img src={img7} alt="gallery image" className={'m-1'}/>
                    <img src={img8} alt="gallery image" className={'m-1'}/>
                </Carousel>
                <p><strong>See something you like? </strong>
                    Book your consultation today, and let's create your dream look.
                </p>
            </Container>
            <Footer></Footer>
        </div>
    )
}