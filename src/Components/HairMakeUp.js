import NavBar from "./NavBar";
import Slider from "./Slider";
import Footer from "./Footer";
export default function HairMakeUp() {
    return (
        <div>
            <NavBar></NavBar>
            <Slider></Slider>
            <div className={'m-5'}>
                <h1>Hair And Make-Up</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}