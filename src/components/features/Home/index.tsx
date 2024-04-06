import { Fragment } from "react";
import About from "./About";
import Banner from "./Banner";
import Founder from "./Founder";
import Inspirations from "./Inspirations";
import Investor from "./Investor";
import Programme from "./Programme";
import Steps from "./Steps";

const Home = () => {
  return (
    <Fragment>
      <Banner />
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
