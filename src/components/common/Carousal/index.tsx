import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { useResponsive } from "hooks/useResponsive";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ImageContainer, { ImageContainerProps } from "./ImageContainer";
import "./styles.css";

type CarousalProps = {
  data: ImageContainerProps[];
  slideNum: number;
  mobileSlides?: number;
  tabSlides?: number;
  autoplay: boolean;
  autoplaySpeed: number;
  showLeftArrow?: boolean;
  showRightArrow?: boolean;
};

const Carousal = ({
  data,
  slideNum,
  mobileSlides = 1,
  tabSlides = 3,
  autoplay,
  autoplaySpeed,
  showLeftArrow = false,
  showRightArrow = false,
}: CarousalProps) => {
  const { screenType } = useResponsive();
  const sliderRef = useRef(null);

  const settings = {
    arrows: false,
    dots: false,
    swipeToSlide: true,
    infinite: true,
    autoplay: autoplay,
    adaptiveHeight: true,
    autoplaySpeed: autoplaySpeed,
    slidesToShow:
      screenType === "MOBILE"
        ? mobileSlides
        : screenType === "TABLET"
        ? tabSlides
        : slideNum,
    slidesToScroll:
      screenType === "MOBILE"
        ? mobileSlides
        : screenType === "TABLET"
        ? tabSlides
        : slideNum,
  };

  return (
    <Box className="slide-container">
      <Box className="wrapper">
        {screenType !== "MOBILE" && showLeftArrow && (
          <Box onClick={() => sliderRef.current.slickPrev()} className="prev">
            <ArrowBackIosNewIcon style={{ fontSize: 24 }} />
          </Box>
        )}
        <Slider {...settings} ref={sliderRef}>
          {data.length > 0 &&
            data.map((item: ImageContainerProps, index: number) => (
              <ImageContainer
                key={index}
                image={item.image}
                text={item.text}
                label={item.label}
                height={item.height}
                borderRadius={item.borderRadius}
              />
            ))}
        </Slider>
        {screenType !== "MOBILE" && showRightArrow && (
          <Box onClick={() => sliderRef.current.slickNext()} className="next">
            <ArrowForwardIosIcon style={{ fontSize: 24 }} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Carousal;
