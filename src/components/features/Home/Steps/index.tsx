import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box } from "@mui/material";
import { Button, Section } from "components/common";
import ChoosePath from "components/features/ChoosePath";
import { useState } from "react";
import styles from "./styles";

const Steps = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const steps = [
    "Enter the Portal",
    "Fill Your Details",
    "Craft Your Pitch",
    "Submit Your Application",
    "Prepare to Shine",
  ];

  return (
    <Section
      id="steps"
      heading="HOW TO APPLY"
      description="The Path to Angels and Demons"
    >
      <Box sx={styles.wrapper}>
        <Box sx={styles.leftContainer}>
          <Box
            sx={styles.image}
            component="img"
            src="/applicants.jpeg"
            alt="application"
          />
        </Box>
        <Box sx={styles.rightContainer}>
          <Box sx={styles.heading}>
            Ready to embark on your entrepreneurial journey? Follow these five
            simple steps to register for Angels and Demons
          </Box>
          <Box sx={styles.stepsMapper}>
            {steps.map((step, index) => (
              <Box key={index} sx={styles.steps}>
                <Box>{step}</Box>
                {index !== steps.length - 1 && <Box sx={styles.divider} />}
              </Box>
            ))}
            <Box sx={styles.infoBox}>
              Visit our official website and navigate to the application page.
            </Box>
          </Box>
          <Box sx={styles.buttonWrapper}>
            <Button
              as="LinkButton"
              to="/"
              label="Register Now"
              onClick={() => handleOpen()}
              endIcon={<KeyboardArrowRightIcon />}
            />
          </Box>
        </Box>
      </Box>
      <ChoosePath open={open} handleClose={handleClose} />
    </Section>
  );
};

export default Steps;
