import React from "react";
import Vectors from "../pages/Vectors";
import Photos from "../pages/Photos";
import Icons from "../pages/Icons";
import Videos from "../pages/Videos";
import Psd from "../pages/Psd";
import ThreeD from "../pages/ThreeD";
import { useState } from "react";
import Fonts from "../pages/Fonts";
import "../index.css";
import Pricing from "../pages/Pricing";
import LogIn from "../pages/Log-in";
import Home from "../pages/Home";
import Sellcontent from "../pages/Sell-content";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import AiImages from "../pages/AiImages";
import Post from "../Trendsearches/Post";
import Happybirthday from "../Trendsearches/Happybirthday";
import Abstract from "../Trendsearches/Abstract";
const Header = () => {

  const [open, setOpen] = useState(false);

  // Method to handle open/close
  const handleToggle = () => {
    // Everytime that user click change false to true, 
    // or true to false.
    setOpen(!open);
  }
  return (
    <>
      <BrowserRouter>
        <nav>
          <div className="ham-burger">
            <button>
            <FontAwesomeIcon icon={faBars} />{" "}
            </button>
          </div>
          <div className="list-items">
            <ul>
              <li>
                {" "}
                <Link to="/vectors">Vectors </Link>
              </li>
              <li>
                {" "}
                <Link to="/photos">Photos</Link>
              </li>
              <li>
                {" "}
                <Link to="/icons">Icons</Link>
              </li>
              <li>
                {" "}
                <Link to="/aiimages">Ai Images</Link>
              </li>
              <li>
                {" "}
                <Link to="/videos">Videos</Link>
              </li>
              <li>
                {" "}
                <Link to="/psd">PSD</Link>
              </li>
              <li>
                {" "}
                <Link to="/threeD">3D</Link>
              </li>
              <li>
                {" "}
                <Link to="/fonts">Fonts</Link>
              </li>
              <li className="dropDownpos">
                {" "}
                <button  onClick={handleToggle} className="dropDown">
                  Categories <FontAwesomeIcon icon={faCaretDown} />
                </button>
                <div className={`dropContentAct ${open ? `dropContent` : ""}`}>
                  <div className="row-drop">
                    <div className="left-nav">
                      <div className="drop-links for-padd this-active-link">Designs</div>
                      <div className="drop-links for-padd ">Photos</div>
                      <div className="drop-links for-padd">Videos</div>
                    </div>
                    <div className="right-res">
                      <div className="drop-links">Backgrounds</div>
                      <div className="drop-links">Illustrations</div>
                      <div className="drop-links">Cartoons</div>
                      <div className="drop-links">Greeting cards</div>
                      <div className="drop-links">Posters</div>
                    </div>
                    <div className="right-res">
                      <div className="drop-links">textures</div>
                      <div className="drop-links">drawings</div>
                      <div className="drop-links">symbols and signs</div>
                      <div className="drop-links">invitation cards</div>
                      <div className="drop-links">stationery</div>
                    </div>
                    <div className="right-res">
                      <div className="drop-links">Backgrounds</div>
                      <div className="drop-links">Illustrations</div>
                      <div className="drop-links">Cartoons</div>
                      <div className="drop-links">Greeting cards</div>
                      <div className="drop-links">Posters</div>
                    </div>
                    <div className="right-res">
                      <div className="drop-links">Backgrounds</div>
                      <div className="drop-links">Illustrations</div>
                      <div className="drop-links">Cartoons</div>
                      <div className="drop-links">Greeting cards</div>
                      <div className="drop-links">Posters</div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                {" "}
                <button className="dropDown">
                  More <FontAwesomeIcon icon={faCaretDown} />
                </button>
              </li>
            </ul>
          </div>
          <div className="list-items-right">
            <ul>
              <li>
                {" "}
                <Link to="/sell-content">Sell Content </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/pricing">Pricing </Link>{" "}
              </li>
              <li>
                {" "}
                <Link to="/log-in">Log in</Link>{" "}
              </li>
              <li className="noMargin">
                {" "}
                <button>Sign up</button>{" "}
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vectors" element={<Vectors />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/aiimages" element={<AiImages />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/psd" element={<Psd />} />
          <Route path="/threeD" element={<ThreeD />} />
          <Route path="/fonts" element={<Fonts />} />
          <Route path="/sell-content" element={<Sellcontent />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/post" element={<Post />} />
          <Route path="/happybirthday" element={<Happybirthday />} />
          <Route path="/abstract" element={<Abstract />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Header;