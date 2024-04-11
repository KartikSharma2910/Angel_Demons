import { Box } from "@mui/material";
import "../styles.css";

export type ImageContainerProps = {
  image: string;
  label?: string;
  text?: string;
  height?: string;
  borderRadius?: string;
};

const ImageContainer = ({
  image,
  label,
  text,
  height = "300px",
  borderRadius = "8px",
}: ImageContainerProps) => {
  return (
    <Box
      className="bg-image-container"
      style={{ backgroundImage: `url(${image})`, borderRadius, height }}
    >
      <Box className="gradient">
        <Box className="text-container">
          <Box className="label">{label}</Box>
          <Box className="body">{text}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ImageContainer;
