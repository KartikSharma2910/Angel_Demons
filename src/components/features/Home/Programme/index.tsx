import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import styles from "./styles";

const Programme = () => {
  return (
    <Section
      id="program"
      heading="Who Is This Show For Section"
      description="Empowering Dreams, Igniting Success"
    >
      <Box sx={styles.wrapper}>
        <Box component="img" src="/building.jpeg" sx={styles.image} />
        <Box component="img" src="/person.jpeg" sx={styles.users} />
        <Box sx={styles.content}>
          <Box>
            Dive into the heart of entrepreneurship and witness the remarkable
            progress made by visionaries like you on Angels and Demons. Here's a
            glimpse into the astounding achievements in funding and pitching
          </Box>
          <Box>
            <Box></Box>
            <Button as="LinkButton" to="/" label="Know More" />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default Programme;
