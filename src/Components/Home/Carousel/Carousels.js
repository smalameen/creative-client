import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image1 from "../../../images/carousel-1.png";
import image2 from "../../../images/carousel-2.png";
import image3 from "../../../images/carousel-4.png";
import image4 from "../../../images/carousel-5.png";


const Carousels = () => {
  return (
    <div style={{ height: "500px", backgroundColor: "#111430" }}>
      <h3
        className="mt-3 mb-3"
        style={{
          textAlign: "center",
          color: "white",
          padding: "2rem",
          fontWeight: "700",
          fontSize: "35px",
        }}
      >
        Here are some of <span style={{ color: "#7ab259" }}> our works</span>
      </h3>

      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-10 h-4"
            src={image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-10"
            src={image2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-10"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "300px" }}
            className="d-block w-10"
            src={image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
