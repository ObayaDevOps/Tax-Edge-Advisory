import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NextImage from 'next/image'
import { Image, Img } from "@chakra-ui/image";

//Need to make sure images look good on desktop, ipad and desktop
//currently not loading - 
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop autoPlay stopOnHover showThumbs={false} interval="3700">
      {slides.map((slide) => {
        return <NextImage src={slide} key={slide} height={1824} width={2736} />;
        // return <Image  key={slide} src={slide}></Image>
      })}
    </Carousel>
  );
};

export default ImageSlider;
