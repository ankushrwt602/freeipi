import React from "react";
import Logo from "../images/free-pik-logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
   faCrown,
  faDownload,
  faExpand,
  faFolderClosed,
  faIcons,
  faImage,
  faP,
  faRobot,
  faSearch,
  faShapes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image8 from "../images/8.jpg";
import image7 from "../images/7.jpg";
import image9 from "../images/9.jpg";
import image11 from "../images/11.jpg";
import image5 from "../images/5.jpg";
import community from "../images/vectors/community.webp"
import chooseVect from "../images/vectors/right-vectors.webp"
import registered from "../images/registered.webp"
import { useState } from "react";
import collection1 from "../images/vectors/t-collection-1.jpg"
import collection2 from "../images/vectors/t-collection-2.jpg"
import collection3 from "../images/vectors/t-collection-3.jpg"
import collection4 from "../images/vectors/t-collection-4.jpg"
import collection5 from "../images/vectors/t-collection-5.jpg"
import collection6 from "../images/vectors/t-collection-6.jpg"
import collection7 from "../images/vectors/t-collection-7.jpg"
import collection8 from "../images/vectors/t-collection-8.jpg"
import Footer from "../components/Footer";
const Home = () => {

  const [isActive, setActive] = useState(false);

  // Method to handle open/close
  const ChooseBtn = () => {
    // Everytime that user click change false to true, 
    // or true to false.
    setActive(!isActive);
  }

  const [active, setActive1] = useState(false);

  const handleMouseOver = () => {
    setActive1(true);
  };

  const handleMouseOut = () => {
    setActive1(false);
  };
  const [active2, setActive2] = useState(false);

  const handleMouseOver2 = () => {
    setActive2(true);
  };

  const handleMouseOut2 = () => {
    setActive2(false);
  };

  // hover image 3
  const [active3, setActive3] = useState(false);

  const handleMouseOver3 = () => {
    setActive3(true);
  };

  const handleMouseOut3 = () => {
    setActive3(false);
  };
  // hover image 4
  const [active4, setActive4] = useState(false);

  const handleMouseOver4 = () => {
    setActive4(true);
  };

  const handleMouseOut4 = () => {
    setActive4(false);
  };
  

  const [active5, setActive5] = useState(false);

  const handleMouseOver5 = () => {
    setActive5(true);
  };

  const handleMouseOut5 = () => {
    setActive5(false);
  };
  return (
    <>
      <div
        className={`Home-bnnr ${active ? "bg1" : ""} ${active2 ? "bg2" : ""} ${
          active3 ? "bg3" : ""}  ${active4 ? "bg4" : ""} ${active5 ? "bg5" : ""}`}
      >
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="Logo" />
            <span className="logo-name">freepik</span>
          </Link>
        </div>
        <div className="heading">
          <h1>All the assets you need, in one place</h1>
          <h2>
            Find and download the best high-quality photos, vectors, videos, and
            mockups
          </h2>
        </div>
          <div className="search">
            <div className="assests-tbn">
              <button onClick={ChooseBtn}>
                <FontAwesomeIcon icon={faShapes} /> Assets{" "}
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
        <div className="trendingSearch">
          <ul>
            <li className="trnd-search">
              {" "}
              <Link to="/post">
                Post <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li className="trnd-search">
              {" "}
              <Link to="/happybirthday">
                Happy Birthday <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
            <li className="trnd-search">
              {" "}
              <Link to="/abstract">
                Abstract <FontAwesomeIcon icon={faSearch} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="tredny-img">
          <ul>
            <li>
              <div
                className="images-sec"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <img src={image11} alt="Logo" />
              </div>
              <h3 className="trnd-head">Vectors </h3>
            </li>
            <li>
              <div
                className="images-sec"
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
              >
                <img src={image2} alt="Logo" />
              </div>
              <h3 className="trnd-head">Photos </h3>
            </li>
            <li>
              <div
                className="images-sec"
                onMouseOver={handleMouseOver3}
                onMouseOut={handleMouseOut3}
              >
                <img src={image3} alt="Logo" />
              </div>
              <h3 className="trnd-head">Videos </h3>
            </li>
            <li>
              <div
                className="images-sec"
                onMouseOver={handleMouseOver4}
                onMouseOut={handleMouseOut4}
              >
                <img src={image4} alt="Logo" />
              </div>
              <h3 className="trnd-head">PSD </h3>
            </li>
            <li>
              <div
                className="images-sec"
                onMouseOver={handleMouseOver5}
                onMouseOut={handleMouseOut5}
              >
                <img src={collection7} alt="Logo" />
              </div>
              <h3 className="trnd-head">Templates </h3>
            </li>
          </ul>
        </div>
      </div>
      <div className="signUp">
        <div className="sign-head">
          <h2>Create an account to enjoy more free downloads</h2>
        </div>
        <div className="signUp-btn">
          <button>Sign up for free</button>
        </div>
      </div>
      <section className="gallery-sec">
        <div className="gallery-heading">
          <h2>
            <span className="blue">Explore</span> trending categories on Freepik
          </h2>
          <p>
            Check what’s popular on Freepik and make your project look trendy
            and professional.
          </p>
        </div>
      <div className="cust-container">
        <div className="gallery-img">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="inner-image padding-none">
                <img src={image8} className="border-rad" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="row ">
                <div className="col-lg-6">
                  <div className="inner-image">
                    <img src={image7} alt="Logo" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-image">
                    <img className="for-border-rad-2" src={image9} alt="Logo" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="inner-image">
                    <img src={image5} alt="Logo" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inner-image">
                    <img className="for-border-rad" src={image11} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <div className="cust-container">
        <div className="gallery-down-heading">
          <h2>Trending collections to boost your ideas</h2>
          <p>Explore Freepik's trendiest collections and find the perfect visual.</p>
        </div>
      </div>
      <section className="collections">
        <div className="cust-container">
          <div className="t-collection-cont">
            <div className="t-box margin-right">
              <div className="image-container">
                <div className="img-box">
                  <div className="image-items">
                    <img src={collection1} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img src={collection2} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img className="height-img" src={collection3} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="t-box margin-right">
              <div className="image-container">
                <div className="img-box">
                  <div className="image-items">
                    <img src={collection4} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img src={collection5} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img className="height-img" src={collection6} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="t-box margin-right">
              <div className="image-container">
                <div className="img-box">
                  <div className="image-items">
                    <img src={collection1} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img src={collection3} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img className="height-img" src={collection8} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="t-box">
              <div className="image-container">
                <div className="img-box">
                  <div className="image-items">
                    <img src={collection2} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img src={collection4} alt="Logo" />
                  </div>
                  <div className="image-items">
                    <img className="height-img" src={collection6} alt="Logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pre-sec">
        <div className="cust-container">
          <div className="gallery-heading">
            <h2>
            Ready to  <span className="blue">level-up?</span>
            </h2>
            <p>
            Premium is the go-to option if you want to take your creative projects to the next level.
            </p>
          </div>
          <div className="premium">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pre-img">
                   <img src={registered} alt="Logo" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="pre-text">
                      <span>
                          <FontAwesomeIcon icon={faDownload} />
                      </span>
                      <span>
                        <h4>Increased productivity</h4>
                        <p>Premium includes full access to Freepik and Flaticon libraries, so you can find anything you need fast.</p>
                      </span>
                </div>
                <div className="pre-text">
                      <span>
                          <FontAwesomeIcon icon={faCrown} />
                      </span>
                      <span>
                        <h4>Increased productivity</h4>
                        <p>Premium includes full access to Freepik and Flaticon libraries, so you can find anything you need fast.</p>
                      </span>
                </div>
                <div className="pre-text">
                      <span>
                          <FontAwesomeIcon icon={faStar} />
                      </span>
                      <span>
                        <h4>Increased productivity</h4>
                        <p>Premium includes full access to Freepik and Flaticon libraries, so you can find anything you need fast.</p>
                      </span>
                </div>
                <div className="pre-button">
                  <button>Go Premium</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="choose-vect">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm">
              <div className="choose-vect-text">
                <span>
                   Quality and versatility in one format
                </span>
                <h4>
                Choose vectors in SVG to create excellence
                </h4>
                <div className="choose-vect-btn">
                  <button>Download SVG</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm">
              <div className="choose-vect-image">
                <img src={chooseVect} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sell">
        <div className="bg-sell-content">
            <div className="container">
                <div className="sell-cont">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="bg-sell-content-text">
                <p>
                   Join Freepik’s <span className="blue">creator community</span>  
                </p>
                <h5>
                Behind every stock image, there’s a creative mind. You can also create content and sell it on Freepik
                </h5>
                <div className="choose-vect-btn">
                  <button>Sell Content</button>
                </div>
              </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="sell-img">
                        <img src={community} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
