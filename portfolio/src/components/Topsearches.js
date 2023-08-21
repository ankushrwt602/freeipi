import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import {
    
    faFilePowerpoint,
    faImages,
    faPhotoFilm,
    faVideo,
  } from "@fortawesome/free-solid-svg-icons";
function Topsearches() {

    const settings = {
        dots: false,
        speed: 1000,
        slidesToShow: 8,
        autoplay: false,
        arrow:true,
        infinite:false,
      };

  return (
    <>
      
      <Slider {...settings}>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faFilePowerpoint}/>PSD</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faPhotoFilm}/>Photos</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faVideo}/>Videos</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faFilePowerpoint}/>PSD</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faPhotoFilm}/>Photos</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faVideo}/>Videos</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
            <div className='slider-custom-items'>
                <Link to="#"><FontAwesomeIcon icon={faImages}/>All images</Link>
            </div>
      </Slider>
    </>
  )
}

export default Topsearches
