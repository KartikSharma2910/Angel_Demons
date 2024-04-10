import { Box } from "@mui/material";
import { Section } from "components/common";
import { useState } from "react";
import styles from "./styles";

const Investor = () => {
  const [angleHover, setAngleHover] = useState(false);
  const [demonHover, setDemonHover] = useState(false);

  return (
    <Section
      id="investors"
      heading="ANGELS AND DEMONS"
      description="Meet Your Potential Saviors or Adversaries"
    >
      <Box sx={styles.wrapper}>
        <Box
          sx={styles.imageWrapper}
          onMouseEnter={() => setAngleHover(true)}
          onMouseLeave={() => setAngleHover(false)}
        >
          <Box
            sx={styles.image}
            component="img"
            src="/aarav.jpeg"
            alt="angel"
          />
          <Box sx={styles.textWrapper}>
            <Box sx={styles.heading}>Aarav Sharma</Box>
            <Box sx={styles.description}>Harmony Ventures</Box>
          </Box>
        </Box>
        {angleHover && <Box>Angels</Box>}
        <Box
          sx={styles.imageWrapper}
          onMouseEnter={() => setDemonHover(true)}
          onMouseLeave={() => setDemonHover(false)}
        >
          <Box
            sx={styles.image}
            component="img"
            src="/vikram.jpeg"
            alt="demon"
          />
          <Box sx={styles.textWrapper}>
            <Box sx={styles.heading}>Vikram Malhotra</Box>
            <Box sx={styles.description}>Dominion Enterprises</Box>
          </Box>
        </Box>
        {demonHover && <Box>Demons</Box>}
      </Box>
    </Section>
  );
};

export default Investor;
