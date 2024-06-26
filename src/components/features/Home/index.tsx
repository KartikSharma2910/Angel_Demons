import { Fragment } from "react";
import About from "./About";
import BannerSlides from "./BannerSlides";
import Founder from "./Founder";
import Inspirations from "./Inspirations";
import Investor from "./Investor";
import Programme from "./Programme";
import Steps from "./Steps";

const Home = () => {
  return (
    <Fragment>
      <BannerSlides />
      <About />
      <Programme />
      <Investor />
      <Inspirations />
      <Steps />
      <Founder />
    </Fragment>
  );
};

export default Home;
