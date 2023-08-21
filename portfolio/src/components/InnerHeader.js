import React from 'react';
import Whitelogo from "../images/free-pik-white-logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
    faCaretDown,
    faExpand,
    faFilePowerpoint,
    faFolderClosed,
    faIcons,
    faImage,
    faImages,
    faP,
    faPhotoFilm,
    faRobot,
    faSearch,
    faShapes,
    faSliders,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons";
  import Topsearches from './Topsearches';
const InnerHeader = () => {
    
  const [isActive, setActive] = useState(false);

  // Method to handle open/close
  const ChooseBtn = () => {
    // Everytime that user click change false to true, 
    // or true to false.
    setActive(!isActive);
  }
  return (
    <>
    <div className="nav-menu">
        <div className="inner-logo">
            <Link to="/">
                <img src={Whitelogo} alt="Logo" />
            </Link>
         </div>
         <div className="search-2">
         <div className="search">
            <div className="assests-tbn">
              <button onClick={ChooseBtn}>
                <FontAwesomeIcon icon={faShapes} /> Assets, Vectors{" "}
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div className={`chooseList ${isActive ? `listisActive` : ""}`}>
                <ul>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faShapes} />{" "}
                    <span className="chooseName"> Assets</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faFolderClosed} />
                    <span className="chooseName"> Collections</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faExpand} />{" "}
                    <span className="chooseName"> Vectors</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faImage} />{" "}
                    <span className="chooseName"> Photos</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faRobot} />{" "}
                    <span className="chooseName"> AI Images</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faIcons} />{" "}
                    <span className="chooseName"> Icons</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faIcons} />{" "}
                    <span className="chooseName"> Videos</span>{" "}
                  </li>
                  <li>
                    {" "}
                    <FontAwesomeIcon icon={faP} />{" "}
                    <span className="chooseName"> PSD</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="searchInput">
              <input type="text" placeholder="Search all assets" required />
            </div>
            <div className="search-btn">
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
         </div>
         <div className="right-btn">
          <button>
          <FontAwesomeIcon icon={faFolderClosed} /> My collection
          </button>
         </div>
    </div>
    <div className="nav-trend-searches">
      <div className="filter-sec">
          <button>
        <FontAwesomeIcon icon={faSliders} ></FontAwesomeIcon>    Filters
          </button>
      </div>
      <div className="trend-search-scroll-cont">
        <Topsearches/>
      </div>
    </div>
    </>
  )
}

export default InnerHeader;
