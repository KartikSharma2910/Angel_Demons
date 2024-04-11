import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Grow, IconButton } from "@mui/material";
import { Section } from "components/common";
import { angelData, demonData } from "constant/investor";
import { useState } from "react";
import styles from "./styles";

const Investor = () => {
  const [angleHover, setAngleHover] = useState(false);
  const [demonHover, setDemonHover] = useState(false);

  return (
    <Section
      id="investors"
      heading="ANGELS AND DEMONS"
      description={
        angleHover ? (
          <Box sx={styles.headerWrapper}>
            <IconButton onClick={() => setAngleHover(false)}>
              <ArrowBackIcon sx={{ ...styles.icon, color: "#1FCFF140" }} />
            </IconButton>
            <Box>Team Angels</Box>
            <IconButton onClick={() => setAngleHover(false)}>
              <CloseIcon sx={styles.icon} />
            </IconButton>
          </Box>
        ) : demonHover ? (
          <Box sx={styles.headerWrapper}>
            <IconButton onClick={() => setDemonHover(false)}>
              <ArrowBackIcon sx={{ ...styles.icon, color: "#F11F1F40" }} />
            </IconButton>
            <Box>Team Demon</Box>
            <IconButton onClick={() => setDemonHover(false)}>
              <CloseIcon sx={styles.icon} />
            </IconButton>
          </Box>
        ) : (
          "Meet Your Potential Saviors or Adversaries"
        )
      }
    >
      <Box sx={styles.wrapper}>
        {angleHover ? (
          <Grow
            in={angleHover}
            style={{ transformOrigin: "0 0 0" }}
            {...(angleHover && { timeout: 1000 })}
          >
            <Box sx={styles.flippedWrapper}>
              {angelData.map((image, index) => (
                <Box sx={styles.container} key={index}>
                  <Box sx={styles.rotatedSquare}></Box>
                  <Box sx={styles.squareImageWrapper}>
                    <Box
                      sx={styles.squareImage}
                      component="img"
                      src={image}
                      alt="angel"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grow>
        ) : (
          <Box
            sx={{
              ...styles.imageWrapper,
              display: demonHover ? "none" : "flex",
            }}
            onClick={() => setAngleHover(true)}
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
        )}
        {demonHover ? (
          <Grow
            in={demonHover}
            style={{ transformOrigin: "0 0 0" }}
            {...(demonHover && { timeout: 1000 })}
          >
            <Box sx={styles.flippedWrapper}>
              {demonData.map((image, index) => (
                <Box sx={styles.container} key={index}>
                  <Box
                    sx={{
                      ...styles.rotatedSquare,
                      border: "1px solid #F11F1F40",
                    }}
                  ></Box>
                  <Box
                    sx={{
                      ...styles.squareImageWrapper,
                      boxShadow: "10px 10px 20px #CD54541F",
                    }}
                  >
                    <Box
                      sx={styles.squareImage}
                      component="img"
                      src={image}
                      alt="demon"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Grow>
        ) : (
          <Box
            sx={{
              ...styles.imageWrapper,
              display: angleHover ? "none" : "flex",
            }}
            onClick={() => setDemonHover(true)}
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
        )}
      </Box>
    </Section>
  );
};

export default Investor;
