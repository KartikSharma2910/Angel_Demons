import { Box } from "@mui/material";
import { Carousal } from "components/common";
import { founders, tabs } from "constant/founders";
import styles from "./styles";

const Founder = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.tabContainer}>
        {tabs.map((tab, index) => (
          <Box
            key={index}
            sx={{ ...styles.tab, color: index === 0 ? "#1E6F7E" : "#8C8C8C" }}
          >
            {tab}
          </Box>
        ))}
      </Box>
      <Box sx={styles.description}>
        Explore success stories and case studies of entrepreneurs who have
        benefited from Angels and Demons Smiler, showcasing the transformative
        impact of strategic investment and mentorship.
      </Box>
      <Box sx={styles.imageWrapper}>
        <Carousal
          autoplay
          showLeftArrow
          showRightArrow
          data={founders}
          autoplaySpeed={6000}
          slideNum={3}
        />
      </Box>
      <Box sx={styles.description}>
        Explore success stories and case studies of entrepreneurs who have
        benefited from Angels and Demons Smiler, showcasing the transformative
        impact of strategic investment and mentorship.
      </Box>
    </Box>
  );
};

export default Founder;
