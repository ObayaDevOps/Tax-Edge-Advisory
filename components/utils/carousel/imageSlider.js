import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import odurInstallation from '../../../public/images/studio/odurInstallation.jpg'
import NextImage from 'next/image'

// Import the 
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay stopOnHover showThumbs interval="4200">
      {slides.map((slide) => {
        return <NextImage src={slide} />;
      })}
    </Carousel>
  );
};

export default ImageSlider;
