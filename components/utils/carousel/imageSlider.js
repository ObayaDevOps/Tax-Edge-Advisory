import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from 'next/image'

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
