import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery/Gallery";
import Dressing from "./Components/Dressing/Dressing";
import HairMakeUp from "./Components/HairMakeUp";
import ContactUs from "./Components/ContactUs/ContactUs";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path={'/'} element={<Home/>}></Route>
                <Route path={'/hair-makeup'} element={<HairMakeUp/>}></Route>
                <Route path={'/gallery'} element={<Gallery/>}></Route>
                <Route path={'/dressing'} element={<Dressing/>}></Route>
                <Route path={'/contactus'} element={<ContactUs/>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
