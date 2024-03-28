import React from 'react';
import '../../App.css';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div style={{height:"95vh",width:'100wh'}}>
          <img src={'images/im1.jpeg'} alt="Item1" />
          <p className="legend">Ask Questions</p>
        </div>
        <div style={{height:"95vh",width:'100wh'}}>
          <img  src={"images/bgm.png"} alt="item2" />
          <p className="legend">
            <Link to={"/chats"} >Ask with chatbot</Link>
          </p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;