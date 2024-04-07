import { Box } from "@mui/material";
import Button from "components/common/Button";
import Carousal from "components/common/Carousal";
import { ImageContainerProps } from "components/common/Carousal/ImageContainer";
import styles from "./styles";

export type SimpleBannerProps = {
  carousalData: ImageContainerProps[];
  heading: string;
  subHeading: string;
  description: string;
  buttonLabel: string;
};

const SimpleBanner = ({
  carousalData,
  heading,
  subHeading,
  description,
  buttonLabel,
}: SimpleBannerProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.carousalWrapper}>
        <Carousal
          autoplay
          autoplaySpeed={6000}
          mobileSlides={1}
          tabSlides={1}
          slideNum={1}
          data={carousalData}
        />
      </Box>
      <Box sx={styles.textContainer}>
        <Box className="heading" sx={styles.heading}>
          {heading}
        </Box>
        <Box sx={styles.subHeading}>{subHeading}</Box>
        <Box sx={styles.description}>{description}</Box>
        <Button
          as="SimpleButton"
          label={buttonLabel}
          customStyles={styles.button}
        />
      </Box>
    </Box>
  );
};

export default SimpleBanner;
