import { Box } from "@mui/material";
import { Banner } from "components/common";
import styles from "./styles";

const Home = () => {
  return (
    <Box component="section" id="#" sx={styles.wrapper}>
      <Banner
        as="DividedBanner"
        imageUrl="/readPage1.jpeg"
        heading="TechGenius Solutions"
        description="Pioneering Innovation in the Indian Tech Sphere"
        leftLabel="Invest"
        rightLabel="Vote"
      />
    </Box>
  );
};

export default Home;
