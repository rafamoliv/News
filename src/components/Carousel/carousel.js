import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselData } from "./carouselData";

export default function CarouselHome() {
  return (
    <>
      <Carousel>
        {CarouselData.map((item, index) => {
          return (
            <Carousel.Item interval={1000} key={index}>
              <img className="d-block w-100" src={item.image} alt="Carousel" />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
}
