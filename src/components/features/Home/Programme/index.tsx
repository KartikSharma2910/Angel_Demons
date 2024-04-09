import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import { useResponsive } from "hooks/useResponsive";
import styles from "./styles";

const Programme = () => {
  const { screenType } = useResponsive();

  return (
    <Section
      id="program"
      heading="Who Is This Show For Section"
      description="Empowering Dreams, Igniting Success"
    >
      <Box sx={styles.wrapper}>
        <Box component="img" src="/building.jpeg" sx={styles.image} />
        {screenType === "DESKTOP" && (
          <Box component="img" src="/person.jpeg" sx={styles.users} />
        )}
        <Box sx={styles.content}>
          <Box sx={styles.heading}>
            Dive into the heart of entrepreneurship and witness the remarkable
            progress made by visionaries like you on Angels and Demons. Here's a
            glimpse into the astounding achievements in funding and pitching
          </Box>
          <Box sx={styles.container}>
            <Box sx={styles.dataContainer}>
              <Box
                sx={{ ...styles.numContainer, backgroundColor: "#00000040" }}
              >
                <Box sx={styles.number}>49+</Box>
                <Box sx={styles.text}>Success Pitch</Box>
              </Box>
              <Box sx={styles.numContainer}>
                <Box sx={styles.number}>500M</Box>
                <Box sx={styles.text}>Fund Raise</Box>
              </Box>
              <Box sx={styles.numContainer}>
                <Box sx={styles.number}>35M</Box>
                <Box sx={styles.text}>Largest Investment</Box>
              </Box>
              <Box
                sx={{ ...styles.numContainer, backgroundColor: "#00000040" }}
              >
                <Box sx={styles.number}>82+</Box>
                <Box sx={styles.text}>Pitch Success Rate</Box>
              </Box>
            </Box>
            <Button
              as="LinkButton"
              to="/"
              label="Know More"
              endIcon={<ArrowForwardIosIcon />}
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Programme;
