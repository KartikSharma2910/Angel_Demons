import { Box, Chip, SxProps } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "components/common/Button";
import styles from "./styles";

export type HeavyCardsProps = {
  imageUrl: string;
  brand: string;
  user: string;
  category: string;
  description: string;
  stages: string;
  features: string[];
  buttonClick?: () => void | string;
  customStyles?: SxProps;
};

const HeavyCards = ({
  imageUrl,
  brand,
  user,
  category,
  buttonClick,
  description,
  stages,
  features,
  customStyles,
}: HeavyCardsProps) => {
  return (
    <Box sx={{ ...styles.wrapper, ...customStyles } as SxProps}>
      <Box sx={styles.image} component="img" src={imageUrl} />
      <Box sx={styles.container}>
        <Box sx={styles.brand}>{brand}</Box>
        <Box sx={styles.users}>{user}</Box>
        <Box sx={styles.category}>
          Category:{" "}
          <Box component="span" className="subCategory">
            {category}
          </Box>
        </Box>
        <Box sx={styles.description}>{description}</Box>
        <Box sx={styles.stage}>
          Stage:{" "}
          <Box component="span" className="stages">
            {stages}
          </Box>
        </Box>
        <Box sx={styles.chipsWrapper}>
          {features.map((feature, index) => (
            <Chip sx={styles.chip} key={index} label={feature} />
          ))}
        </Box>
        <Box sx={styles.buttonWrapper}>
          <Button
            as="LinkButton"
            to="/"
            endIcon={<KeyboardArrowRightIcon />}
            label="Read More"
            customStyles={styles.button}
          />
          <Button
            // as="LinkButton"
            // to={buttonClick}
            endIcon={<KeyboardArrowRightIcon />}
            label="Invest"
            onClick={buttonClick}
            customStyles={styles.button}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HeavyCards;
