import { Box } from "@mui/material";
import { Banner } from "components/common";
import { successStoriesBanner } from "constant/banner";
import styles from "./styles";

const Home = () => {
  return (
    <Box component="section" id="#" sx={styles.wrapper}>
      <Banner
        as="SimpleBanner"
        carousalData={successStoriesBanner}
        subHeading="SUCCESS STORIES"
      />
    </Box>
  );
};

export default Home;
