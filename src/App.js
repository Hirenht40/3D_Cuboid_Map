// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import GoogleMaps from './component/GoogleMaps';
import { BrowserRouter as Router, Routes , Route, useHistory, Navigate } from 'react-router-dom';
import MapComponent from "./component/GoogleMaps"
import Navbar from './component/Navbar';
import Footer from "./component/Footer";
import Home from "./component/Home";
import Location  from "./component/Location";
// const dotenv = require("dotenv");

// dotenv.config({path:"cuboid/config.env"});




 // Create the search box and link it to the UI element.
//  import Map1 from "./component/MapPage";

  


function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
    <Router>
    <Navbar/>



    <Routes>
              <Route exact path="/" element={<Home/>} />

          <Route exact path="/MapComponent" element={<MapComponent/>} />

          <Route exact path="/location" element={<Location/>} />

     
        </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
