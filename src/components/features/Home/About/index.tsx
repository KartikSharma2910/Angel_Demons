import { Box } from "@mui/system";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Section, Button } from "components/common";
import styles from "./styles";

const About = () => {
  return (
    <Section
      id="about"
      heading="About"
      description="The Journey to Entrepreneurial Triumph"
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.leftBox}>
          <Box
            sx={styles.image}
            component="img"
            src="/about.jpeg"
            alt="about"
          />
        </Box>
        <Box sx={styles.rightBox}>
          <Box sx={styles.text}>
            Step into the Arena of Innovation and Investment, Where Dreams
            Become Reality. Angels and Demons isn't just a show; it's a Quest
            for Excellence, a Battlefield of Ambition. Here, Entrepreneurs Dare
            to Dream and Investors Seek the Extraordinary. Welcome to a World
            Where Visionaries Thrive and Legends Are Born.
          </Box>
          <Button
            as="LinkButton"
            to="/"
            label="Read More"
            endIcon={<ArrowForwardIosIcon />}
          />
        </Box>
      </Box>
    </Section>
  );
};

export default About;
