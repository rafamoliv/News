import React from "react";
import { Link } from "react-router-dom";
import CarouselHome from "../../components/Carousel";
import Navbar from "../../components/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <h3>Landing</h3>
      <Link to="/Classified">Classified</Link>
      <CarouselHome />
    </>
  );
}
