import { Box } from "@mui/material";
import { Banner } from "components/common";
import { homeBanner } from "constant/banner";

const BannerSlides = () => {
  return (
    <Box component="section" id="#">
      <Banner
        as="SimpleBanner"
        buttonLabel="Seize Your Opportunity"
        carousalData={homeBanner}
        heading="Welcome to Angels and Demons"
        subHeading="Transform Your Dreams into Reality"
        description="A Reality Show Where Entrepreneurs Meet Their Destiny"
      />
    </Box>
  );
};

export default BannerSlides;
