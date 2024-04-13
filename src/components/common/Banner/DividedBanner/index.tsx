import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import Button from "components/common/Button";
import styles from "./styles";

export type DividedBannerProps = {
  imageUrl?: string;
  heading?: string;
  description?: string;
  leftLabel?: string;
  rightLabel?: string;
};

const DividedBanner = ({
  imageUrl,
  heading,
  description,
  leftLabel,
  rightLabel,
}: DividedBannerProps) => {
  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.imageContainer}>
        <Box sx={styles.image} component="img" src={imageUrl} />
      </Box>
      <Box sx={styles.container}>
        <Box sx={styles.heading}>{heading}</Box>
        <Box sx={styles.description}>{description}</Box>
        <Box sx={styles.buttonWrapper}>
          <Button
            as="LinkButton"
            to="/"
            endIcon={<KeyboardArrowRightIcon />}
            label={leftLabel}
            customStyles={styles.button}
          />
          <Button
            as="LinkButton"
            to="/"
            endIcon={<KeyboardArrowRightIcon />}
            label={rightLabel}
            customStyles={styles.button}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DividedBanner;
